gsap.registerPlugin(ScrollTrigger);

var fb = $('#fb');
var tw = $('#tw');
var ig = $('#ig');
var li = $('#li');

        fb.on('mouseenter', () => {
            gsap.to(fb, {duration: 0.3, backgroundColor: '#88aa32'})
        })
        fb.on('mouseout', () => {
            gsap.to(fb, {duration: 0.1, backgroundColor: '#4267B2'})
            gsap.to(fb, {duration: 0.2, backgroundColor: '#a8cf45', delay: 0.1})
        })


        tw.on('mouseenter', () => {
            gsap.to(tw, {duration: 0.3, backgroundColor: '#88aa32'})
        })
        tw.on('mouseout', () => {
            gsap.to(tw, {duration: 0.1, backgroundColor: '#1DA1F2'})
            gsap.to(tw, {duration: 0.2, backgroundColor: '#a8cf45', delay: 0.1})
        })


        li.on('mouseenter', () => {
            gsap.to(li, {duration: 0.3, backgroundColor: '#88aa32'})
        })
        li.on('mouseout', () => {
            gsap.to(li, {duration: 0.1, backgroundColor: '#0072b1'})
            gsap.to(li, {duration: 0.2, backgroundColor: '#a8cf45', delay: 0.1})
        })


        ig.on('mouseenter', () => {
            gsap.to(ig, {duration: 0.3, backgroundColor: '#88aa32'})
        })
        ig.on('mouseout', () => {
            gsap.to(ig, {duration: 0.1, backgroundColor: 'linear-gradient( #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80)'})
            gsap.to(ig, {duration: 0.2, backgroundColor: '#a8cf45', delay: 0.1})
        })

        var box = $('.border-box');

        $('.sq1').on('mouseenter', () => {
            gsap.to('.box-1', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq1').on('mouseout', () => {
            gsap.to('.box-1', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


        $('.sq2').on('mouseenter', () => {
            gsap.to('.box-2', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq2').on('mouseout', () => {
            gsap.to('.box-2', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


        $('.sq3').on('mouseenter', () => {
            gsap.to('.box-3', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq3').on('mouseout', () => {
            gsap.to('.box-3', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


        $('.sq4').on('mouseenter', () => {
            gsap.to('.box-4', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq4').on('mouseout', () => {
            gsap.to('.box-4', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


        $('.sq5').on('mouseenter', () => {
            gsap.to('.box-5', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq5').on('mouseout', () => {
            gsap.to('.box-5', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


        $('.sq6').on('mouseenter', () => {
            gsap.to('.box-6', {duration: 1, rotation: 180, ease: 'power1.inOut'})
        })
        $('.sq6').on('mouseout', () => {
            gsap.to('.box-6', {duration: 1, rotation: 0, ease: 'power1.inOut'})
        })


var nav = $('#navbar');
var header = $('header')

const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.3)" } });

tl.to(nav, {
  scrollTrigger: {trigger: nav, start: "top top", scrub: true },
  position: "fixed",
  top: 0,
  duration: 1,
});


var s1 = $('.slide-1');
var s2 = $('.slide-2');

gsap.from(s1, {
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    x: -50,
    stagger: 0.3
})
gsap.from(s2, {
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    x: 50,
    stagger: 0.3
})

var jump = $('.jump-to-top');
var info = $('.info-section');

gsap.to(jump, {
    scrollTrigger: {
        trigger: '.info-section',
        start: 'top center',
        scrub: true,
    },
    opacity: 1,
    display: 'block',
    duration: 1 
})