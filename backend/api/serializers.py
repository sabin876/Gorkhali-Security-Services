from rest_framework import serializers
from .models import ContactInquiry, SecurityService, TeamMember, Testimonial

class ContactInquirySerializer(serializers.ModelSerializer):
    service_type_display = serializers.CharField(source='get_service_type_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = ContactInquiry
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'service_type',
            'service_type_display',
            'message',
            'status',
            'status_display',
            'created_at',
        ]
        read_only_fields = ['id', 'status', 'created_at']


class SecurityServiceSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = SecurityService
        fields = [
            'id',
            'title',
            'slug',
            'short_description',
            'detailed_description',
            'icon_name',
            'image',
            'image_url',
            'is_featured',
            'order',
        ]

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            url = obj.image.url
            if request is not None:
                return request.build_absolute_uri(url)
            return f"http://localhost:8000{url}"
        if obj.image_url:
            return obj.image_url
        return ""


class TeamMemberSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = [
            'id',
            'name',
            'designation',
            'category',
            'category_display',
            'bio',
            'image',
            'image_url',
            'order',
        ]

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            url = obj.image.url
            if request is not None:
                return request.build_absolute_uri(url)
            return f"http://localhost:8000{url}"
        if obj.image_url:
            return obj.image_url
        return ""


class TestimonialSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Testimonial
        fields = [
            'id',
            'client_name',
            'designation_or_company',
            'rating',
            'content',
            'image',
            'order',
            'created_at',
        ]

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            url = obj.image.url
            if request is not None:
                return request.build_absolute_uri(url)
            return f"http://localhost:8000{url}"
        return ""
