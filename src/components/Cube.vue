<template>
    <Renderer ref="renderer" resize="true" :alpha="true" background="red">
        <Camera ref="camera" :position="{ z: 5 }" :fov="fov" />
        <Scene>

            <PointLight color="blue" :intensity="0.6" :position="{ y: 50, z: 50, x: -50 }" />
            <PointLight color="red" :intensity="0.6" :position="{ y: 50, z: 50, x: 50 }" />

            <PointLight color="white" :intensity="0.3" :position="{ y: -50, z: 50 }" />

            <PointLight :intensity="1" :position="{ y: 50, z: 50 }" />

            <Box ref="box" :position="{ x: -1, y: 1.2, z: 2 }" :rotation="{ y: Math.PI / 2, z: Math.PI + .2 }">
                <PhongMaterial>
                    <Texture src="./src/assets/dirt.jpg" />
                </PhongMaterial>

            </Box>

            <Box ref="box2" :position="{ x: -2, y: -0.5, z: 2 }" :rotation="{ y: Math.PI / 4, z: Math.PI + .2 }">
                <PhongMaterial>
                    <Texture src="./src/assets/dirt.jpg" />
                </PhongMaterial>
            </Box>

            <Box ref="box3" :position="{ x: 2, y: 1, z: 2 }" :rotation="{ y: Math.PI / 4, z: Math.PI + .2 }">
                <PhongMaterial>
                    <Texture src="./src/assets/dirt.jpg" />
                </PhongMaterial>
            </Box>

            <Box ref="box4" :position="{ x: 1.5, y: -0.7, z: 2 }" :rotation="{ y: Math.PI / 4, z: Math.PI + .2 }">
                <PhongMaterial>
                    <Texture src="./src/assets/dirt.jpg" />
                </PhongMaterial>
            </Box>

        </Scene>

    </Renderer>
</template>

<script>

export default {
    data() {
        return {
            fov: window.innerWidth <= 700 ? 100 : 60
        }
    },
    mounted() {
        const renderer = this.$refs.renderer;
        const box = this.$refs.box.mesh;
        const box2 = this.$refs.box2.mesh;
        const box3 = this.$refs.box3.mesh;
        const box4 = this.$refs.box4.mesh;
        const camera = this.$refs.camera.camera;

        renderer.onBeforeRender(() => {
            box.rotation.y += 0.005;
            box2.rotation.y += 0.005;
            box3.rotation.y -= 0.005;
            box4.rotation.y -= 0.005;

            // camera.position.y += 0.01;
            // camera.fov += 0.01;

        });

        window.addEventListener('resize', () => {
            this.resize(camera)
        })

        this.resize(camera)

    },
    methods: {

        resize(camera) {
            // console.log(window.innerWidth);
            if (
                window.innerWidth <= 700
            ) {
                this.fov = 100
                // console.log('90');
            } else {
                this.fov = 60
                // console.log('50');
            }
        }

    }
};
</script>