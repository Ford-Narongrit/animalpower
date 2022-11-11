<template>
    <div>
        <div>this is onclick dropdown</div>
        <button class="p-2 bg-slate-400 " @click="dropdown=!dropdown">menu</button>
        <div class="rounded-lg bg-red-400 animate-fadeIn" v-if="dropdown">
            this is dropdown
        </div>

        <div>this is onchange</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>
            count is {{count}}
        </div>
        
        <div>this is v-model</div>
        <input v-model="name">
        <div>{{name}}
            </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            count: 0,
            dropdown: false,
            name: "ford"
        }
    }
}
</script>

<style>

</style>