from django.contrib.staticfiles.storage import StaticFilesStorage
from whitenoise.storage import CompressedManifestStaticFilesStorage


class JazzminStaticFilesStorage(CompressedManifestStaticFilesStorage):
    """Keep manifest checks for files while supporting Jazzmin's theme base URL."""

    def url(self, name, force=False):
        # Jazzmin appends theme filenames to this directory URL in JavaScript.
        # Directories have no entry in Django's staticfiles manifest.
        if name.rstrip('/') == 'vendor/bootswatch':
            return StaticFilesStorage.url(self, name)
        return super().url(name, force=force)
