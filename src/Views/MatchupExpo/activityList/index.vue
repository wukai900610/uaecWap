<template>
<div class="activityList wrap">
    <h2>Event</h2>
    <div class="activityList-view">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="Subject" label="Subject" width="180">
            </el-table-column>
            <el-table-column prop="Brief" label="Brief" width="180">
            </el-table-column>
            <el-table-column prop="Date" label="Date">
            </el-table-column>
            <el-table-column label="">
                <template slot-scope="scope">
                    <el-button size="mini" @click="next('/MatchupExpo/seeActivity')">View</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
    getActivityList
} from "@/assets/api/api";

export default {
    name: "index",
    data() {
        return {
            tableData: []
        }
    },
    created() {
        getActivityList({
                page: 1,
                size: 10
            })
            .then(result => {
                console.log(result)
                this.tableData = result.data
            })
    },
    methods: {
        next(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped lang="scss">
.activityList {
    width: 1200px;
    margin: 0 auto;
    h2 {
        text-align: center;
        margin: 70px 0;
    }
    .activityList-view {
        width: 998px;
        margin: 50px auto;
        border-top: 1px solid rgba(224,224,224,1);
    }
}
</style>
