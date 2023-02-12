<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
    const body = document.querySelector('body');

    body.addEventListener('mousemove', event => {

        let clientX = event.pageX,
            clientY = event.pageY;

        // request = requestAnimationFrame(updateMe)

        mouseCoords(event)
        cursor.classList.remove('hiddenCursor')
        aura.classList.remove('hiddenCursor')
    })

    const cursor = document.getElementById('cursor'),
        aura = document.getElementById('aura'),
        links = document.getElementsByTagName('a'),
        texts = document.getElementsByTagName('p'),
        h1 = document.getElementsByTagName('h1')





    let mouseX = 0, mouseY = 0, posX = 0, posY = 0

    function mouseCoords(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;

    }

    gsap.to({}, .01, {

        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

            gsap.set(aura, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })
        }
    })

    for (let i = 0; i < links.length; i++) {

        links[i].addEventListener('mouseover', (event) => {
            cursor.classList.add('active')
            aura.classList.add('active')
        })

        links[i].addEventListener('mouseout', (event) => {
            cursor.classList.remove('active')
            aura.classList.remove('active')
        })

    }

    let mouseText = (mass, className) => {
        for (let i = 0; i < mass.length; i++) {
            mass[i].addEventListener('mouseover', (event) => {
                cursor.classList.add(className)
                aura.classList.add(className)
            })

            mass[i].addEventListener('mouseout', (event) => {
                cursor.classList.remove(className)
                aura.classList.remove(className)
            })
        }
    }

    mouseText(texts, 'text')
    mouseText(h1, 'text')



    body.addEventListener('mouseout', event => {
        cursor.classList.add('hiddenCursor')
        aura.classList.add('hiddenCursor')

    })
})
</script>

<template>

    <div id="cursor"></div>
    <div id="aura"></div>

</template>

<style lang="sass">
*
    cursor: none
#cursor, #aura
    position: absolute
    border-radius: 100%
    transition: .5s cubic-bezier(.75, -1.27,.3,2.33) transform, .4s cubic-bezier(.75, -1.27,.3,2.33) opacity
    user-select: none
    pointer-events: none
    z-index: 10000

#cursor 
    width: 8px
    height: 8px
    background-color: rgba(0,255,255,.5)
    z-index: 10001
    transform: scale(1)
    &.active
        transform: scale(0)
        opacity: 0
    &.text
        height: 20px
        border-radius: .5rem
        transform: translate(-3px,-10px)
        transition: .5s ease-in-out transform 
#aura
    width: 46px
    height: 46px
    border: 1px solid rgba(#fff,.2)
    background-color: rgba(#fff,.027)
    transform: translate(5px,5px),
    backdrop-filter: blur(.2rem)
    transition: .3s cubic-bezier(.75, -1.27,.3,2.33) backdrop-filter, .3s cubic-bezier(.75, -1.27,.3,2.33) transform
    &.active
        border: 1.2px solid rgba(#fff, .33)
        transform: scale(1.3)
        backdrop-filter: blur(0px)
    &.text
        // backdrop-filter: blur(0px)
        // border: 1px solid rgba(#fff,.2)
        // border-radius: .5rem
        // height: 30px
        // width: 92px
        // transform: translate(-20px,15px)
        backdrop-filter: blur(0px)
        transform: scale(.1)



        

#aura.hiddenCursor,
#cursor.hiddenCursor
    opacity: 0
    transform: scale(.1)
</style>