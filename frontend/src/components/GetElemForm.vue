<template>
    <div class="form-inline">
        <input type="text" id="get_index" 
        class="form-control" placeholder="Index" v-model="index">&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="getElement">Get Element at Index</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4>Value: {{ this.val }}</h4>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GetElemForm',
        data: function() {
            return {
                index : this.index,
                val : ''
            }
    },
    methods: {
        getElement: function()  {
            if(this.index != null)
            {
                axios.get('http://localhost:8000/get/'+this.index).then(response => {
                    this.index = null
                    if(response.data.data == null)
                        this.val = "Invalid Index"
                    else
                        this.val = response.data.data
                })
            }
            else
                alert("Missing input ! D:")   
        }
    }
}
</script>
