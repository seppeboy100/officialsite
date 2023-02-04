var audio = {
init: function() {
    var $that = this;
        $(function() {
            $that.components.media();
        });
    },
components: {
        media: function(target) {
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
            if (media.length) {
                media.mediaelementplayer({
                    audioHeight:0,
                    features : ['playpause', 'progress', 'tracks'],
                    alwaysShowControls : true,
                    timeAndDurationSeparator: '<span></span>',
                    iPadUseNativeControls: false,
                    iPhoneUseNativeControls: false,
                    AndroidUseNativeControls: false
                });
            }
        },

    },
};
audio.init();
