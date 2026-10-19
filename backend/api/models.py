from django.db import models

class ContactInquiry(models.Model):
    SERVICE_CHOICES = [
        ('vip', 'VIP Bodyguard'),
        ('event', 'Event Security'),
        ('bouncer', 'Club Bouncer'),
        ('residence', 'Residence Security'),
        ('general', 'General Security'),
        ('other', 'Other Inquiry'),
    ]

    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted / In Progress'),
        ('resolved', 'Resolved / Contracted'),
        ('closed', 'Closed'),
    ]

    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True, null=True)
    service_type = models.CharField(max_length=50, choices=SERVICE_CHOICES, default='vip')
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Contact Inquiry / Quote Request'
        verbose_name_plural = 'Contact Inquiries & Quote Requests'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} ({self.get_service_type_display()}) - {self.created_at.strftime('%Y-%m-%d %H:%M')}"


class SecurityService(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(max_length=140, unique=True, help_text="Unique URL identifier (e.g. sports-club-security)")
    short_description = models.TextField(help_text="Short overview displayed on the homepage cards")
    detailed_description = models.TextField(blank=True, default='', help_text="Full operational overview displayed on the service details page")
    icon_name = models.CharField(max_length=50, default='Shield', help_text="Icon options: Shield, Users, UserPlus, Video, Truck, FileText")
    image = models.ImageField(upload_to='services/', blank=True, null=True, help_text="Upload image file directly from your local computer")
    image_url = models.CharField(max_length=500, blank=True, default='', help_text="Optional external image URL if not uploading a file")
    is_featured = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Security Service'
        verbose_name_plural = 'Security Services'
        ordering = ['order', 'title']

    def __str__(self):
        return self.title

    @property
    def final_image_url(self):
        if self.image:
            return self.image.url
        return self.image_url


class TeamMember(models.Model):
    CATEGORY_CHOICES = [
        ('leadership', 'Leadership / Board'),
        ('advisor', 'Advisors'),
        ('management', 'Operations & Management'),
    ]

    name = models.CharField(max_length=120)
    designation = models.CharField(max_length=150, help_text="Role or title (e.g. Chairman, Finance Manager, Tactical Advisor)")
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES, default='leadership')
    bio = models.TextField(blank=True, default='', help_text="Biography, credentials, and executive message")
    image = models.ImageField(upload_to='team/', blank=True, null=True, help_text="Upload portrait photo directly from your local computer")
    image_url = models.CharField(max_length=500, blank=True, default='', help_text="Optional external image URL if not uploading a file")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Team Member'
        verbose_name_plural = 'Team Members'
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} - {self.designation}"

    @property
    def final_image_url(self):
        if self.image:
            return self.image.url
        return self.image_url


class Testimonial(models.Model):
    client_name = models.CharField(max_length=120)
    designation_or_company = models.CharField(max_length=150, blank=True, default='', help_text="Role & Organization (e.g. CEO, Tech Corp)")
    rating = models.PositiveSmallIntegerField(default=5)
    content = models.TextField(help_text="Client review and feedback quote")
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True, help_text="Client portrait/avatar from your local computer")
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.client_name} ({self.rating}/5)"

    @property
    def final_image_url(self):
        if self.image:
            return self.image.url
        return ''
