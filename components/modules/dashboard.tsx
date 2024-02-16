import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconActivity, IconTrendingUp } from "@tabler/icons-react";

import CircleProgressCard from "./circle-progress-card";
import BarChart from "./bar-chart";
import { CurvedlineChart } from "./curved-line-chart";

export function Dashboard() {
  return (
    <section className="col-span-10">
      <h1 className="text-2xl font-semibold mb-4">Hi, welcome back!</h1>
      <p className="mb-6">
        Your finance performance and monitoring dashboard template.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <CircleProgressCard
          label="GROSS PROFIT MARGIN"
          description="The profit you make on each dollar of sales after you have paid
              for the cost of goods sold."
          progress={78}
          progressColor="purple"
        />
        <CircleProgressCard
          label="NET PROFIT MARGIN"
          description="Measures your business at generating profit"
          progress={62}
          progressColor="#2563eb"
        />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>YOUR BALANCE</CardTitle>
          </CardHeader>
          <CardContent>
            <CurvedlineChart className="w-full h-[200px]" />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold">$780,560.00</div>
              <div className="text-sm">ACCOUNT HOLDER Alicia Christensen</div>
            </div>
            <div>
              <Badge variant="secondary">VISA</Badge>
            </div>
          </CardFooter>
        </Card>
        <Card className="md:col-span-2 row-span-2">
          <CardContent className="flex justify-evenly h-full flex-col">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center items-center">
                <IconTrendingUp className="w-36 h-36 text-gray-200/75" />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl">Quick Ratio</h1>
                <div className="text-3xl font-bold">0.9:8</div>
                <p>Quick Ratio Goal: 1.0 or higher</p>
                <p>
                  Measures your Current Assets + Accounts Receivable / Current
                  Liabilities
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center items-center">
                <IconActivity className="w-36 h-36 text-gray-200/75" />
              </div>
              <div>
                <h1 className="text-2xl">Current Ratio</h1>
                <div className="text-3xl font-bold">2.8</div>
                <p>Quick Ratio Goal: 2.0 or higher</p>
                <p>Measures your Current Assets / Current Liabilities.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TOTAL INCOME</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart className="w-full h-[100px]" />
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="text-3xl font-bold">$83,320.50</div>
            <div className="text-sm">18.2% higher vs previous month</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TOTAL EXPENSES</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart className="w-full h-[100px]" />
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="text-3xl font-bold">$32,370.00</div>
            <div className="text-sm">0.7% higher vs previous month</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ACCOUNTS RECEIVABLE</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart className="w-full h-[100px]" />
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="text-3xl font-bold">$9,112.00</div>
            <div className="text-sm">0.7% higher vs previous month</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ACCOUNTS PAYABLE</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart className="w-full h-[100px]" />
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="text-3xl font-bold">$8,216.00</div>
            <div className="text-sm">0.7% higher vs previous month</div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
