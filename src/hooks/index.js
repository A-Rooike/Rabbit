import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
import { useStore } from 'vuex'


export const useLazyData = (target, action) => {
  // 需要
  // 1. 被观察的对象
  // 2. 不同的API函数
  // const target = ref(null)
  const store = useStore()
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 请求vux获取数据
        store.dispatch(action)
      }
    }
  )
}