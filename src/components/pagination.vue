<template>
  <div class="block"  style="text-align:right;">
    <el-pagination 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props:['total','page','size'],
    methods: {
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        
        this.$emit('UpdatePage',this.page,val);  
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.$emit('UpdatePage',val,this.size); 
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
<style>
  .pagepost{
    
    bottom: 0;
  }
</style>