import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    repoUrl: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    liveUrl,
    repoUrl,
}: ProjectCardProps) {
    return (
        <Card className="max-w-sm shadow-lg flex flex-col bg-white dark:bg-gray-800 ">
            <CardHeader>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle className="text-xl font-semibold mb-2">
                    {title}
                </CardTitle>
                <CardDescription className="text-gray-800 dark:text-gray-300">
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto mx-auto gap-4">
                <Button asChild>
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                </Button>
                <Button asChild>
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
