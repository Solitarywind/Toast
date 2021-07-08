<template>
    <div :class="[type,animate]" class="toast_mess">
        <i :class="iconType" class="iconfont"></i>
        <span style="margin-left: 10px;">{{msg}}</span>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                flag: true,
            }
        },
        computed: {
            iconType() {
                if (this.type === 'success') {
                    return 'icon-success'
                } else if (this.type === 'error') {
                    return 'icon-error'
                } else if (this.type === 'info') {
                    return 'icon-info'
                } else if (this.type === 'warning') {
                    return 'icon-warning'
                }
                return "icon-primary"; //如果什么状态都不传就是这个
            },
            animate() {
                return this.flag ? 'fade-in' : 'fade-out';
            },
        }
    }
</script>

<style scoped>
    @import url('../assets/font/iconfont.css');
</style>
<style lang="scss" scoped>
    .toast_mess {
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px;
        min-width: 200px;
        border-radius: 5px;
        z-index: 100;
    }

    .success {
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        color: #67c23a;
    }

    .error {
        background-color: #fef0f0;
        border-color: #fde2e2;
        color: #f56c6c;
    }

    .warning {
        background-color: #fdf6ec;
        border-color: #faecd8;
        color: #e6a23c;
    }

    .info {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
    }

    .primary {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }


    @keyframes fadeIn {
        0% {
            opacity: 0;
            top: 0;
        }
        100% {
            opacity: 1;
            top: 50px;
        }
    }

    @keyframes fadeOut {
        100% {
            opacity: 0;
            top: 0;
        }
        0% {
            opacity: 1;
            top: 50px;
        }
    }

    .fade-in {
        animation: fadeIn 0.5s forwards;
    }

    .fade-out {
        animation: fadeOut 0.5s forwards;
    }
</style>
