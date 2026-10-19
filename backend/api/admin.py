from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import ContactInquiry, SecurityService, TeamMember, Testimonial

@admin.action(description="Mark selected inquiries as Contacted")
def mark_contacted(modeladmin, request, queryset):
    queryset.update(status='contacted')

@admin.action(description="Mark selected inquiries as Resolved")
def mark_resolved(modeladmin, request, queryset):
    queryset.update(status='resolved')

@admin.action(description="Mark selected inquiries as Closed")
def mark_closed(modeladmin, request, queryset):
    queryset.update(status='closed')


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'service_pill', 'status_badge', 'created_at', 'edit_button')
    list_display_links = ('full_name',)
    list_filter = ('status', 'service_type', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'message')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    actions = [mark_contacted, mark_resolved, mark_closed]

    fieldsets = (
        ("Client Contact Information", {
            "fields": ("full_name", "email", "phone"),
            "description": "Direct communication details submitted by the client."
        }),
        ("Security Requirements", {
            "fields": ("service_type", "message"),
            "description": "Details regarding the requested security scope, VIP close protection, or venue."
        }),
        ("Status & Log", {
            "fields": ("status", "created_at", "updated_at"),
        }),
    )

    def service_pill(self, obj):
        return obj.get_service_type_display()
    service_pill.short_description = "Service Requested"

    def status_badge(self, obj):
        colors = {
            'new': '#f59e0b',
            'contacted': '#3b82f6',
            'resolved': '#10b981',
            'closed': '#6b7280',
        }
        color = colors.get(obj.status, '#6b7280')
        return format_html(
            '<span style="background-color: {}; color: #fff; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 11px;">{}</span>',
            color,
            obj.get_status_display()
        )
    status_badge.short_description = "Status"

    def edit_button(self, obj):
        url = reverse('admin:api_contactinquiry_change', args=[obj.pk])
        return format_html(
            '<a href="{}" class="btn btn-sm" style="background-color: #2563eb; color: #ffffff !important; padding: 4px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #1d4ed8;">'
            '<i class="fas fa-edit"></i> Edit</a>',
            url
        )
    edit_button.short_description = "Action"


@admin.register(SecurityService)
class SecurityServiceAdmin(admin.ModelAdmin):
    list_display = ('image_preview', 'title', 'slug', 'icon_name', 'order', 'edit_button')
    list_display_links = ('title',)
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'short_description', 'detailed_description')
    fieldsets = (
        ("Service Title & Routing", {
            "fields": ("title", "slug", "icon_name", "order", "is_featured"),
            "description": "The title appears on all cards and headers. The slug is the page URL (e.g. demo-services)."
        }),
        ("Image Upload (From Local Computer)", {
            "fields": ("image", "image_url"),
            "description": "Upload a cover image directly from your local computer using the 'Choose File' button below. Alternatively, provide an external image URL."
        }),
        ("Descriptions & Content", {
            "fields": ("short_description", "detailed_description"),
            "description": "Short Description: shown on homepage cards. Detailed Description: shown on the dedicated service details page."
        }),
    )

    def image_preview(self, obj):
        url = obj.final_image_url
        if url:
            return format_html('<img src="{}" style="width: 45px; height: 35px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);" />', url)
        return format_html('<span style="color: #64748b; font-size: 11px;">No Image</span>')
    image_preview.short_description = "Image"

    def edit_button(self, obj):
        url = reverse('admin:api_securityservice_change', args=[obj.pk])
        return format_html(
            '<a href="{}" class="btn btn-sm" style="background-color: #2563eb; color: #ffffff !important; padding: 4px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #1d4ed8;">'
            '<i class="fas fa-edit"></i> Edit</a>',
            url
        )
    edit_button.short_description = "Action"


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('photo_preview', 'name', 'designation', 'category', 'order', 'edit_button')
    list_display_links = ('name',)
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'designation', 'bio')
    fieldsets = (
        ("Officer Details", {
            "fields": ("name", "designation", "category", "order", "is_active"),
        }),
        ("Photo Upload (From Local Computer)", {
            "fields": ("image", "image_url"),
            "description": "Upload officer portrait directly from your local computer."
        }),
        ("Biography & Credentials", {
            "fields": ("bio",),
            "description": "Executive message, peacekeeping background, or tactical credentials."
        }),
    )

    def photo_preview(self, obj):
        url = obj.final_image_url
        if url:
            return format_html('<img src="{}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 50%; border: 1px solid #c5a059;" />', url)
        return format_html('<span style="color: #64748b; font-size: 11px;">No Photo</span>')
    photo_preview.short_description = "Photo"

    def edit_button(self, obj):
        url = reverse('admin:api_teammember_change', args=[obj.pk])
        return format_html(
            '<a href="{}" class="btn btn-sm" style="background-color: #2563eb; color: #ffffff !important; padding: 4px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #1d4ed8;">'
            '<i class="fas fa-edit"></i> Edit</a>',
            url
        )
    edit_button.short_description = "Action"


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'designation_or_company', 'stars_rating', 'order', 'edit_button')
    list_display_links = ('client_name',)
    list_filter = ('rating', 'is_published')
    search_fields = ('client_name', 'designation_or_company', 'content')
    fieldsets = (
        ("Client Details", {
            "fields": ("client_name", "designation_or_company", "rating", "order", "is_published"),
        }),
        ("Client Photo (From Local Computer)", {
            "fields": ("image",),
            "description": "Upload client or company representative photo."
        }),
        ("Testimonial Quote", {
            "fields": ("content",),
        }),
    )

    def stars_rating(self, obj):
        return format_html('<span style="color: #f59e0b; font-weight: bold;">{} ⭐</span>', '★' * obj.rating)
    stars_rating.short_description = "Rating"

    def edit_button(self, obj):
        url = reverse('admin:api_testimonial_change', args=[obj.pk])
        return format_html(
            '<a href="{}" class="btn btn-sm" style="background-color: #2563eb; color: #ffffff !important; padding: 4px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #1d4ed8;">'
            '<i class="fas fa-edit"></i> Edit</a>',
            url
        )
    edit_button.short_description = "Action"
