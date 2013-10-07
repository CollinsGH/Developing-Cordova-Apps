(function() {
    window.app = {
        notifier:{        
            vibrate: function() {
                navigator.notification.vibrate(1000)          
            }
        }
    }
}())