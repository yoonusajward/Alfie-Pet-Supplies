<template>
    <div class="container mx-auto">
        <div class="flex justify-center">
            <div class="w-full md:w-1/2">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 class="text-2xl font-bold mb-4">User Profile</h1>
                    <p><strong>Name:</strong> {{ user.displayName }}</p>
                    <p><strong>Email:</strong> {{ user.email }}</p>
                    <div class="mt-6">
                        <button @click="handleLogout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

    export default {
        name: "UserProfile",
        setup() {
            const store = useStore();
            const user = computed(() => store.getters.user.data);

            const handleLogout = () => {
                store.dispatch('logOut');
            };

            return { user, handleLogout };
        }
    };

</script>
