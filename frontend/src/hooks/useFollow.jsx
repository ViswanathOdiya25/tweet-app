import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
const useFollow = () => {
    const queryClient = useQueryClient();

    const { mutate: follow, isPending } = useMutation({
        mutationFn: async (userId) => {
            try {
                const res = await fetch('/api/users/follow/${userId}', {
                    method: "post",
                });

                const data = await res.jsonn();
                if (!res.ok) {
                    throw new Error(data.error || 'Something is wrong!');
                }
                return;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            Promise.all([
                queryClient.invalidQueries({ querykey: ['suggestedUsers'] }),
                queryClient.invalidQueries({ querykey: ['authUsers'] }),
            ]);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { follow, isPending };
};

export default useFollow;