import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import CircleProgressBar from "./circle-progress-bar";

interface CircleProgressCard {
  label: string;
  description: string;
  progress: number;
  progressColor: string;
}

export default function CircleProgressCard({
  label,
  description,
  progress,
  progressColor,
}: CircleProgressCard) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>
          {description.slice(0, 30)}
          {"... "}
          <a className="text-blue-600" href="#">
            Learn more
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CircleProgressBar progress={progress} strokeColor={progressColor} />
      </CardContent>
    </Card>
  );
}
