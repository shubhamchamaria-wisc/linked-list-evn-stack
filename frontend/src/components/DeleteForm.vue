<template>
    <div class="form-inline">
        <input type="text" id="delete_index" 
        class="form-control" placeholder="Index" v-model="index">&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="deleteElement">Remove from Linked List</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4>Status: {{ this.val }}</h4>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DeleteForm',
        data: function() {
            return {
                index : this.index,
                val : ''
            }
    },
    methods: {
        deleteElement: function()  {
            if(this.index != null)
            {
                axios.post('http://localhost:8000/delete', {
                    index : this.index
                })
                .then((response) => {
                    this.index = null
                    if(response.data.data == null)
                        this.val = "Invalid Index"
                    else
                    {
                        this.val = "Deleted " + response.data.data + " at " + response.data.index
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
