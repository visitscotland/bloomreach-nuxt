<template>
    <svg
        @click="toggleSelected"
        width="36"
        height="36"
        viewBox="0 0 25 23"
        class="star"
        :class="starStyle"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.5 1.61804L14.8309 8.7918L14.9432 9.13729H15.3064H22.8494L16.747 13.5709L16.4531 13.7844L16.5654 14.1299L18.8963 21.3037L12.7939 16.8701L12.5 16.6565L12.2061 16.8701L6.10374 21.3037L8.43464 14.1299L8.54689 13.7844L8.253 13.5709L2.15064 9.13729H9.69357H10.0568L10.1691 8.7918L12.5 1.61804Z"
        />
    </svg>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                isSelected: false,
                starStyle: "unselected"
            }
        },
        methods: {
            toggleSelected() {
                this.starStyle = this.starStyle === "selected" ? "unselected" : "selected";
            }
        }
    }
</script>

<style scoped>
    .star {
        stroke: purple;
        stroke-width: 2;
    }
    .unselected{
        transition: 0.1s ease-in;
        fill: transparent;
    }

    .selected {
        fill: purple;
        transition: 0.3s ease-out;
    }
</style>
