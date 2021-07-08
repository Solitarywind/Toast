<template>
    <div class="home">
        <button @click.stop="getToast('info','打开普通信息')" class="info">普通消息</button>
        <button @click.stop="getToast('primary','打开提示信息')" class="primary">提示消息</button>
        <button @click.stop="getToast('success','打开成功消息')" class="success">成功消息</button>
        <button @click.stop="getToast('warning','打开警告消息')" class="danger">警告消息</button>
        <button @click.stop="getToast('error','打开错误消息')" class="error">错误消息</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            getToast(type,text){
                 this.$toast({msg:text,type});
            },
        },
    }
</script>

<style lang="scss" scoped>
    button {
        width: 100px;
        height: 40px;
        margin: 200px 50px;
        cursor: pointer;
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
    }

    .info {
        background: #909399;
    }

    .primary {
        background: #409eff;
    }

    .success {
        background: #67c23a;
    }

    .danger {
        background: #e6a23c;
    }

    .error {
        background: #f56c6c;
    }
</style>
