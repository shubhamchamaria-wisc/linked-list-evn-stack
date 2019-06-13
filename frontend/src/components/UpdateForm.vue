<template>
    <div class="form-inline">
        <input type="text" id="update_index" 
        class="form-control" placeholder="Index" v-model="index">&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="update_data" 
        class="form-control" placeholder="Value" v-model="data">&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="updateElement">Update Linked List</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4>Status: {{ this.val }}</h4>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UpdateForm',
    data: function() {
        return {
            index: this.index,
            data : this.data,
            val : ''
        }
    },
    methods: {
        updateElement: function()  {
            if(this.index != null && this.data != null)
            {
                axios.post('http://localhost:8000/update', {
                    index : this.index,
                    data : this.data
                })
                .then((response) => {
                    this.data = null
                    this.index = null
                    if(response.data.data == null)
                        this.val = "Invalid Index"
                    else
                    {
                        this.val = "Updated " + response.data.data + " at " + response.data.index
                        this.$emit('update-view')
                    }
                })     
            }
            else
                alert("Missing input! D:")   
        }
    }
}
</script>

