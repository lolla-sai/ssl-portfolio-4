import type { Route } from "./+types/project";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import remarkGfm from "remark-gfm";
import NavBar from "~/components/NavBar";
import projects from "~/data/projects";
import { data } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Project Blog" },
        { name: "description", content: "Hi, I am Sai Lolla" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    return {
        projectId: params.id,
        project: projects.find((i) => i.id === params.id),
    };
}

export default function ProjectBlog({ loaderData }: Route.ComponentProps) {
    const { projectId, project } = loaderData;

    return (
        <main>
            <div className="mb-24">
                <NavBar enableAnimation={false} />
            </div>

            <div className="my-8 mx-auto prose">
                <Link to="/">{"<- Go Back Home!"}</Link>
                {/* markdown rendering starts */}
                <div className="mx-4">
                    {project !== undefined &&
                    project.markdownContent !== undefined ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {project.markdownContent}
                        </ReactMarkdown>
                    ) : (
                        <p>No Blog yet for project: {projectId}</p>
                    )}
                </div>
            </div>
        </main>
    );
}
