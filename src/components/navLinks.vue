<template>
    <span class="relative">
        {{ feedback.text }}
        <span v-if="feedback.notification"
        class="absolute bg-[#AB61E5] text-white font-semibold h-4 w-4 rounded-full text-[11px] flex items-center justify-center -top-2 -right-5">
        {{ feedback.notification }}    
        </span>
    </span>
</template>


<script>
export default {
    props: ['feedback']
}
</script>


   
  
