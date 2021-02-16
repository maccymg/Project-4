from pictures.serializers.common import PictureSerializer
from ..serializers.common import PictureTypeSerializer

class PopulatedPictureTypeSerializer(PictureTypeSerializer):

    pictures = PictureSerializer(many=True)
    