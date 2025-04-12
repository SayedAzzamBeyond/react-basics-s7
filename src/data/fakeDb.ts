interface DatabaseItems{
    [key: string]: any[];
}
export const fakeDb = {
    items: {} as DatabaseItems,

    addItem(key: string, value: any) {
        return new Promise((resolve) => {
            if (!Array.isArray(this.items[key])) {
                this.items[key] = [];
            }
            this.items[key].push(value);
            resolve({message: 'Item added successfully'});
        });
    },

    getItem(key: string): Promise<any[]> {
        return new Promise((resolve) => {
            resolve(this.items[key] || []);
        });
    },

    removeItem(key: string, id: any): Promise<{ message: string }> {
        return new Promise((resolve) => {
            if (Array.isArray(this.items[key])) {
                this.items[key] = this.items[key].filter(item => item.id !== id);
                resolve({message: 'Item removed successfully'});
            }
        });

    },

    updateItem(key: string, id: any, newValue: any): Promise<{ message: string }> {
        return new Promise((resolve) => {
            if (Array.isArray(this.items[key])) {
                this.items[key] = this.items[key].map(item => item.id === id ? { ...item, ...newValue } : item);
                resolve({message: 'Item updated successfully'});
            }
        });
    }
}