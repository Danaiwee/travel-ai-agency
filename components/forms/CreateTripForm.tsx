import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CreateTripSchema } from "@/lib/validations";

import { Form } from "../ui/form";

const CreateTripForm = () => {
  const form = useForm<z.infer<typeof CreateTripSchema>>({
    resolver: zodResolver(CreateTripSchema),
    defaultValues: {
      country: "",
      duration: 0,
      groupType: "",
      travelStyle: "",
      interests: "",
      budget: "",
    },
  });

  return (
    <Form {...form}>
        <form>
            
        </form>
    </Form>
  );
};

export default CreateTripForm;
