<template>
    <div>
        <h1>{{ text }}</h1>
    </div>
</template>

<script>
export default {
    name: 'NewComp',
    props: {
        text: String                      
    }
}
</script>