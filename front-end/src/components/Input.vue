<template>
    <input type="{{ type }}" class="py-[4px] px-2 rounded-lg border border-[#777777] outline-none">
</template>

<script>
export default {
    name: "Vinput",
    props: {
        type: String,
    }
}
</script>