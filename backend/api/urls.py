from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ContactInquiryViewSet,
    SecurityServiceViewSet,
    TeamMemberViewSet,
    TestimonialViewSet,
    api_root,
)

router = DefaultRouter()
router.register(r'inquiries', ContactInquiryViewSet, basename='inquiry')
router.register(r'services', SecurityServiceViewSet, basename='service')
router.register(r'team', TeamMemberViewSet, basename='team')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')

urlpatterns = [
    path('', api_root, name='api-root'),
    path('', include(router.urls)),
]
