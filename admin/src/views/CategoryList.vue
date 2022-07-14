<template>
  <div class="category">
    <h1>分类列表</h1>
		<el-table :data="item">
			<el-table-column prop="_id" label="ID" width="240">
			</el-table-column>
			<el-table-column prop="parent.name" label="上级分类">
			</el-table-column>
			<el-table-column prop="name" label="分类名称">
			</el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      width="180">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="$router.push(`/categories/create/${scope.row._id}`)">编辑</el-button>
					<el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
  </div>
</template>

<script>
  export default {
    name: 'CategoryList',
    data() {
      return {
        item:[]
      }
    },
		created(){
			this.fetch().catch(error=>{
				console.log(error);
			})
		},
    methods: {
     async fetch(){
        const res = await this.$http.get('/categories');
				this.item = res.data;
     },
		 del(row){
				this.$confirm(`是否要删除分类${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
					const res = await this.$http.delete(`/categories/${row._id}`);
					// console.log(res);
					this.$message({
						type: 'success',
						message: '删除成功'
					})
					this.fetch()
        })
     },
    },
  }
</script>

<style scoped>

</style>