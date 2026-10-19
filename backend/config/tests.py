import tempfile
from pathlib import Path

from django.contrib.auth.models import AnonymousUser
from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.management import call_command
from django.template.loader import render_to_string
from django.test import RequestFactory, SimpleTestCase, override_settings


class ProductionAdminStaticTests(SimpleTestCase):
    @override_settings(DEBUG=False)
    def test_admin_login_renders_with_collected_manifest_and_theme_assets(self):
        with tempfile.TemporaryDirectory() as directory:
            with self.settings(STATIC_ROOT=Path(directory)):
                call_command('collectstatic', interactive=False, verbosity=0)

                response = self.client.get('/admin/login/')
                self.assertEqual(response.status_code, 200)
                # The dashboard base (unlike login) requests the theme directory.
                request = RequestFactory().get('/admin/')
                request.user = AnonymousUser()
                dashboard = render_to_string(
                    'admin/base.html', {'user': request.user}, request=request
                )
                self.assertIn(
                    'data-theme-base="/static/vendor/bootswatch"', dashboard
                )

                theme = 'vendor/bootswatch/darkly/bootstrap.min.css'
                theme_url = staticfiles_storage.url(theme)
                self.assertNotEqual(theme_url, f'/static/{theme}')
                self.assertContains(response, theme_url)
                asset = self.client.get(theme_url)
                self.assertEqual(asset.status_code, 200)
                asset.close()

                # The directory workaround must not hide genuinely missing files.
                with self.assertRaisesMessage(ValueError, 'Missing staticfiles manifest entry'):
                    staticfiles_storage.url('vendor/bootswatch/missing.css')
