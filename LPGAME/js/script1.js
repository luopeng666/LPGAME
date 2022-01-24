var text = ["#paths_for_happynew", "#paths_for_coding"]
var paths_Orgament = document.querySelectorAll("#ornament path")



//for Orgament only animation
var tl_Orgament = gsap.timeline({repeat:-1, repeatRefresh: true});

//I determine edges of the screen -  a space in which will Orgament paths be visible on the screen (when they find themselves in that space)
var BBox = document.getElementById("ornament").getBBox();
var left = -(BBox.x + BBox.width);
var right = 1366 - BBox.x;            
var up = -(BBox.y + BBox.height);
var down = 600 - BBox.y;

tl_Orgament.fromTo(paths_Orgament, {
    x: function () {
        var x = gsap.utils.random(-1500, 1500);
        if (x > left & x < right) {
            if (x < right / 2) x = left - 4000;
            else x = right + 7000;
        }
        return x;
    },
    y: function () {
        var y = gsap.utils.random(-1000, 1000);
        if (y > up & y < down) {
            if (y < down / 2) y = up - 100;
            else y = down + 100;
        }
        return y;
    },
    rotate: "random(-360, 360)"
},
    { x: 0, y: 0, rotation: 0, stagger: 0.01, ease: "power2.out", duration: 4.35, repeat: 1, yoyo: true, repeatDelay: 1.7 }
)
tl_Orgament.to(".parcel", { scale: 1.7, fill: "#f8e105", stagger: 0.05, yoyo: true, repeat: 1, duration: 1 }, 4.3)
tl_Orgament.fromTo("#handle", { y: -500 }, { y: 0, duration: 2, repeat: 1, yoyo: true, repeatDelay: 2.7 }, 2);
//tl_Orgament.add(function () { tl_Orgament.invalidate().restart() });



//for Text only animation
var tl_Text = gsap.timeline({ repeat: -1, ease: "none" });
tl_Text.set("#text_happy", { strokeDasharray: 1188, strokeDashoffset: 1188 })
tl_Text.set("#text_y", { strokeDasharray: 110, strokeDashoffset: 110 })
tl_Text.set("#text_dash", { strokeDasharray: 58, strokeDashoffset: 58 })
tl_Text.set("#text_new", { strokeDasharray: 556, strokeDashoffset: 556 })
tl_Text.set("#text_co", { strokeDasharray: 851, strokeDashoffset: 851 })
tl_Text.set("#text_ding", { strokeDasharray: 728, strokeDashoffset: 728 })
tl_Text.set("#text_dot", { strokeDasharray: 17, strokeDashoffset: 17 })
tl_Text.set("#text_g", { strokeDasharray: 264, strokeDashoffset: 264 })

//"happy new"
tl_Text.to("#text_happy", { strokeDashoffset: 0, duration: 2.5 }, 1.5)
tl_Text.to("#text_y", { strokeDashoffset: 0, duration: 0.3 }, "-=1")
tl_Text.to("#text_dash", { strokeDashoffset: 0, duration: 0.5 }, "-=2.3")
tl_Text.to("#text_new", { strokeDashoffset: 0, duration: 1.5 }, "-=0.8")

//"Coding"
tl_Text.to("#text_co", { strokeDashoffset: 0, duration: 1.5 })
tl_Text.to("#text_ding", { strokeDashoffset: 0, duration: 2.3 }, "-=1.3")
tl_Text.to("#text_dot", { strokeDashoffset: 0, duration: 0.2 }, "-=0.5")
tl_Text.to("#text_g", { strokeDashoffset: 0, duration: 0.5 }, "-=1.4")

//do nothing
tl_Text.to(text, { duration: 4.5 })
tl_Text.to(text, { autoAlpha: 0, duration: 1 }, 9.5)





//for Codepen Logo only animation
tl_Codepen = gsap.timeline({repeat:-1, repeatRefresh: true});

tl_Codepen.to("#codepen", { opacity: 1, duration: 1.5 }, 4)
tl_Codepen.fromTo("#feGaussianBlur", { attr: { stdDeviation: "8" } }, { attr: { stdDeviation: "0" }, duration: 1 });

tl_Codepen.fromTo("#codepen path",
    { x: 0, y: 0, rotate: 0 },
    {
       x: function () {
            var x = gsap.utils.random(0, 2500);
            if (x < right) x = right + 100;
            return x;
        },
        y: function () {
            var y = gsap.utils.random(-1000, 1000);
            if (y > up & y < down) {
                if (y < down / 2) y = up - 100;
                else y = down + 100;
            }
            return y;
        },
        rotate: "random(-60, 60)",
        duration: 4,
        stagger: 0.01,
        ease: "power2.out",
    }, 8.6)

//cutting the long animation since it's not visible
tl_Codepen.add(function() { 
    tl_Codepen.set("#codepen", {opacity: 0})
    tl_Codepen.progress(1);
}, 11.68);


//gsap.globalTimeline.timeScale(2.5)