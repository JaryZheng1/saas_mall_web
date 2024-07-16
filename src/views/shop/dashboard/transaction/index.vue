<template>
    <div class="">
      <to-day></to-day>
      <transaction-from></transaction-from>
    </div>
</template>

<script>
    import toDay from './components/toDay.vue'
    import transactionFrom from './components/transaction.vue'
    export default {
        name: "index",
        components: {
            toDay,
            transactionFrom
        },
    }
</script>

<style scoped>

</style>
