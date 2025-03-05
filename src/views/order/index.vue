<template>
  <div class="order-page">
    <PageTitle title="订单" desc="发现顶尖提示语应用及其创作者" />
    <div class="order-header">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane v-for="tab in tabOptions" 
          :key="tab.name" 
          :label="tab.label" 
          :name="tab.name">
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="order-list">
      <el-card v-for="order in orderList" :key="order.id" class="order-item">
        <div class="order-info">
          <div class="order-header">
            <span class="order-number">订单号：{{ order.orderNo }}</span>
            <span class="order-date">{{ order.createTime }}</span>
            <span class="order-status">{{ order.status }}</span>
          </div>
          <div class="product-list">
            <div v-for="product in order.products" :key="product.id" class="product-item">
              <el-image :src="product.image" class="product-image"></el-image>
              <div class="product-info">
                <p class="product-name">{{ product.name }}</p>
                <p class="product-price">¥{{ product.price }}</p>
                <p class="product-quantity">x{{ product.quantity }}</p>
              </div>
            </div>
          </div>
          <div class="order-footer">
            <span class="total-amount">总计：¥{{ order.totalAmount }}</span>
            <div class="order-actions">
              <el-button v-if="order.status === '待付款'" type="primary" size="small" @click="handlePay(order)">
                立即付款
              </el-button>
              <el-button v-if="order.status === '待发货'" type="info" size="small" @click="handleCancel(order)">
                取消订单
              </el-button>
              <el-button v-if="order.status === '已完成'" type="primary" size="small" @click="handleReview(order)">
                评价
              </el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        v-model:current-page="currentPage"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/pageTitle/index.vue"

export default {
  name: 'OrderPage',
  components: {
    PageTitle
  },
  data() {
    return {
      activeTab: 'all',
      currentPage: 1,
      total: 0,
      tabOptions: [
        { label: '全部订单', name: 'all' },
        { label: '待付款', name: 'unpaid' },
        { label: '待发货', name: 'unshipped' },
        { label: '已完成', name: 'completed' }
      ],
      orderList: [
        {
          id: 1,
          orderNo: 'ORDER2024031501',
          createTime: '2024-03-15 10:30:00',
          status: '待付款',
          totalAmount: 399,
          products: [
            {
              id: 1,
              name: '示例商品1',
              image: 'https://placeholder.com/150',
              price: 399,
              quantity: 1
            }
          ]
        }
        // 更多订单数据...
      ]
    }
  },
  methods: {
    handleTabClick(tab) {
      this.loadOrders(tab.name)
    },
    handlePageChange(page) {
      this.currentPage = page
      this.loadOrders(this.activeTab)
    },
    loadOrders(status) {
      // TODO: 调用API获取订单列表
      console.log('加载订单列表', status)
    },
    handlePay(order) {
      // TODO: 实现支付功能
      console.log('支付订单', order)
    },
    handleCancel(order) {
      // TODO: 实现取消订单功能
      console.log('取消订单', order)
    },
    handleReview(order) {
      // TODO: 实现评价功能
      console.log('评价订单', order)
    }
  },
  created() {
    this.loadOrders(this.activeTab)
  }
}
</script>

<style lang="scss" scoped>
.order-page {
  .order-header {
    margin-bottom: 20px;
    border-bottom: 1px solid #f4f4f5;
    .el-tabs {
      padding: 20px 20px 0;
      :deep(.el-tabs__header) {
        margin: 0;
      }
      :deep(.el-tabs__nav-wrap) {
        &::after {
          display: none;
        }
      }
    }
    h2 {
      margin-bottom: 15px;
    }
  }

  .order-list {
    .order-item {
      margin-bottom: 20px;

      .order-info {
        .order-header {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;

          .order-status {
            color: #409EFF;
          }
        }

        .product-list {
          padding: 15px 0;

          .product-item {
            display: flex;
            margin-bottom: 10px;

            .product-image {
              width: 80px;
              height: 80px;
              margin-right: 15px;
            }

            .product-info {
              flex: 1;

              .product-name {
                margin-bottom: 5px;
              }

              .product-price {
                color: #f56c6c;
                margin-bottom: 5px;
              }

              .product-quantity {
                color: #999;
              }
            }
          }
        }

        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid #eee;

          .total-amount {
            font-size: 16px;
            font-weight: bold;
            color: #f56c6c;
          }

          .order-actions {
            .el-button {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .pagination-container {
    text-align: center;
    margin-top: 20px;
  }
}
</style>