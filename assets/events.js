AFRAME.registerComponent('video-handler-1', {
    init: function () {
        console.log("video-handler-1 init");
        this.toggle = false;
        this.tour_video_1 = document.querySelector("#tour-video-1");
        this.tour_video_1.pause();
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                this.tour_video_1.play();
            }
        } else {
            this.toggle = false;
            this.tour_video_1.pause();
        }
    }
});

AFRAME.registerComponent('video-handler-2', {
    init: function () {
        console.log("video-handler-2 init");
        this.toggle = false;
        this.tour_video_2 = document.querySelector("#tour-video-2");
        this.tour_video_2.pause();
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                this.tour_video_2.play();
            }
        } else {
            this.toggle = false;
            this.tour_video_2.pause();
        }
    }
});

AFRAME.registerComponent('video-handler-3', {
    init: function () {
        console.log("video-handler-3 init");
        this.toggle = false;
        this.tour_video_3 = document.querySelector("#tour-video-3");
        this.tour_video_3.pause();
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                this.tour_video_3.play();
            }
        } else {
            this.toggle = false;
            this.tour_video_3.pause();
        }
    }
});

AFRAME.registerComponent('fixed-video-1', {
    init: function () {
        this.fixed_video_container = document.querySelector("#fixed-video-container-1");
        this.fixed_video = document.querySelector("#fixed-video-1");
        this.close_btn = document.querySelector("#fixed-video-container-1 .close-btn");
        this.el.addEventListener("click", this.onClick.bind(this));
        this.close_btn.addEventListener("click", e => {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        });
    },
    onClick: function() {
        console.log("Clicked 1");
        if (!this.toggle) {
            this.toggle = true;
            this.fixed_video_container.classList.add("active");
            this.fixed_video.play();
        } else {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        }
    }
});

AFRAME.registerComponent('fixed-video-2', {
    init: function () {
        this.fixed_video_container = document.querySelector("#fixed-video-container-2");
        this.fixed_video = document.querySelector("#fixed-video-2");
        this.close_btn = document.querySelector("#fixed-video-container-2 .close-btn");
        this.el.addEventListener("click", this.onClick.bind(this));
        this.close_btn.addEventListener("click", e => {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        });
    },
    onClick: function() {
        console.log("Clicked 2");
        if (!this.toggle) {
            this.toggle = true;
            this.fixed_video_container.classList.add("active");
            this.fixed_video.play();
        } else {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        }
    }
});

AFRAME.registerComponent('fixed-video-3', {
    init: function () {
        this.fixed_video_container = document.querySelector("#fixed-video-container-3");
        this.fixed_video = document.querySelector("#fixed-video-3");
        this.close_btn = document.querySelector("#fixed-video-container-3 .close-btn");
        this.el.addEventListener("click", this.onClick.bind(this));
        this.close_btn.addEventListener("click", e => {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        });
    },
    onClick: function() {
        console.log("Clicked 3");
        if (!this.toggle) {
            this.toggle = true;
            this.fixed_video_container.classList.add("active");
            this.fixed_video.play();
        } else {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        }
    }
});