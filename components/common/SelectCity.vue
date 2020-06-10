<template>
    <div>
        <a-select v-model="provinceSelected"
            style="width: 130px"
            @change="handleProvinceChange">
            <a-select-option v-for="province in provinceData"
                :key="province.provinceCode">
                {{ province.provinceName }}
            </a-select-option>
        </a-select>
        <a-select v-model="citySelected"
            style="width: 130px">
            <a-select-option v-for="city in cityData"
                :key="city.cityCode">
                {{ city.cityName }}
            </a-select-option>
        </a-select>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { getProvinceList, getCityList } from "~/req/com";
import $fn from "~/utils/fn";


@Component
export default class CityCom extends Vue {
    public provinceSelected = 0
    public citySelected = 0
    public provinceData: any = [];
    public cityData: any = [];
    

    public mounted(){
        this.init();
    }

    public get cityCodeSelected(){
        let cityCode=""
        this.cityData.forEach((city: any) => {
            if(city.cityName===this.citySelected){
                cityCode=city.cityCode
            }
        })
        return cityCode
    }
    public async init(){
        this.provinceData = await $fn.showMsgResponse(await getProvinceList());
        this.provinceSelected = this.provinceData[0].provinceCode;
        this.initCityData(this.provinceData[0].provinceCode)
    }

    public async initCityData(provinceCode: any){
        this.cityData = await $fn.showMsgResponse(
            await getCityList({
                provinceCode
            })
        )
        this.citySelected = this.cityData[0].cityCode
    }

    public async handleProvinceChange(val: any){
        this.initCityData(val)
    }
}
</script>
<style lang="less"></style>
