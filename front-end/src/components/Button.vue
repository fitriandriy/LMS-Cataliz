<template>
    <button class="text-white px-4 py-[5px] rounded-lg bg-[#02BC7D]">{{ buttonNames }}</button>
</template>

<script>
export default {
    name: "Vbutton",
    props: {
        buttonNames: String,
    }
}
</script>