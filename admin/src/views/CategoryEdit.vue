<template>
  <div class="category">
    <h2>创建分类</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称" >
        <el-input v-model="model.name" placeholder="请输入内容"></el-input>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'CategoryEdit',
    props: {},
    components: {},
    data() {
      return {
        model:{}
      }
    },
    computed: {

    },
    methods: {
     async save(){
        // const res = await this.$http({
        //   url:'/categories',
        //   method:'POST',
        //   data:{
        //     model:this.model
        //   }
        // })
        const res = await this.$http.post('/categories',this.model)
        console.log(res);
      
        
     }
    },
  }
</script>

<style scoped>

</style>