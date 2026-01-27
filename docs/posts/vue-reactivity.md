---
title: 我的第一篇文章 
date: 2023-05-20  
---


# 深入浅出 Vue3 响应式原理

(原来的内容...)

## 这里是我用 Vue3 写的一个交互演示

<script setup>
import { ref } from 'vue'

const count = ref(0)
const add = () => {
  count.value++
}
</script>

<div class="demo-card">
  <p>当前的 Count 是: {{ count }}</p>
  <button style="background-color: #c2f8b9" @click="add">点我 +1</button>
</div>

<style>
.demo-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>