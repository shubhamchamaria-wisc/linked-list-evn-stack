<template>
    <div class="form-inline">
        <input type="text" id="insert_data" 
        class="form-control" placeholder="Value" v-model="data">&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="addElement">Add to Linked List</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h4>Status: {{ this.val }}</h4>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'InsertForm',
        data: function() {
            return {
                data : this.data,
                val : ''
            }
    },
    methods: {
        addElement: function()  {
            if(this.data != null)
            {
                axios.post('http://localhost:8000/add', {
                    data : this.data
                })
                .then((response) => {
                    this.data = null
                    if(response.data.data == null)
                        this.val = "Failed Insert"
                    else
                    {
                        this.val = "Inserted " + response.data.data
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
