<template>
    <input type="{{ type }}" class="py-[4px] rounded-lg border border-[#777777] outline-none">
</template>

<script>
export default {
    name: "Vinput",
    props: {
        type: String,
    }
}
</script>