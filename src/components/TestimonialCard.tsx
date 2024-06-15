import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "./ui/card";

interface TestimonialCardProps {
    testimonial: string;
    name: string;
    image: string;
    role: string;
    company: string;
}

export default function TestimonialCard({
    testimonial,
    name,
    image,
    role,
    company
}: TestimonialCardProps) {
    return (
        <Card className="max-w-2xl shadow-lg flex flex-col bg-white dark:bg-gray-800 relative mt-16">
            <CardHeader className="text-center relative flex justify-center">
                <div className="relative flex justify-center items-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-48 h-48 rounded-full object-cover"
                        style={{ marginTop: "-6rem" }}
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow mt-4">
                <CardDescription className="text-gray-800 dark:text-gray-300 text-center text-lg">
                    {testimonial}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col justify-between mt-auto text-center gap-1">
                <h5 className="font-semibold text-lg">{name}</h5>
                <p className="text-gray-700 dark:text-gray-400">{role}</p>
                <p className="text-gray-500 dark:text-gray-500">{company}</p>
            </CardFooter>
        </Card>
    );
}
