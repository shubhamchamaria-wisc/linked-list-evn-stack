class LinkedListNode 
{
    constructor(data) 
    {
        this.data = data;
        this.next = null;
    }
}

const head = Symbol("head");

class LinkedList 
{
    constructor() 
    {
        this[head] = null;
    }

    add(data) 
    {
        const newNode = new LinkedListNode(data);

        if (this[head] === null) 
        {
            this[head] = newNode;
        } 
        else 
        {
            let current = this[head];
            while (current.next !== null) 
            {
                current = current.next;
            }
            current.next = newNode;            
        }
        return newNode.data;
    }

    get(index) 
    {
    
        if (index >= 0) 
        {

            let current = this[head];
            let i = 0;

            while (current !== null && i < index) {
                current = current.next;
                i++;          
            }
            if(current !== null)
            	return current.data;
            else
            	return undefined;
        } 
        else 
        {
            return undefined;
        }
    }

	update(index, updatedData) 
    {
    
        if (index >= 0) 
        {

            let current = this[head];
            let i = 0;

            while (current !== null && i < index) {
                current = current.next;
                i++;          
            }
            if(current !== null)
            {
            	current.data = updatedData;
            	return updatedData;
            }
            else
            	return undefined;
        } 
        else 
        {
            return undefined;
        }
    }

    remove(index) 
    {
        if (this[head] === null || index < 0) 
        {
            return undefined;
        }

        if (index == 0) 
        {
            const data = this[head].data;
            this[head] = this[head].next;
            return data;
        }

        let current = this[head];
        let previous = null;
        let i = 0;

        while ((current !== null) && (i < index)) 
        {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) 
        {
            previous.next = current.next;
            return current.data;
        }

        return undefined;
    }

}

module.exports = {
  LinkedListNode : LinkedListNode,
  LinkedList : LinkedList
}
