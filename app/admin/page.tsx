'use client'
import React from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardContent } from "./components/DashboardContent";
import { UserTable } from "./components/UserTable";
import { ExchangesTable } from "./components/ExChangesTable";
import { SurveyForm } from "./components/SurveyForm";
import { SurveyTable } from "./components/SurveyTable";
import { SurveyDetail } from "./components/SurveyDetail";

interface Survey {
	id: string;
	title: string;
	points: number;
	date: string;
}


const AdminPage = () => {
	const navItems = ["Home", "User", "Exchanges", "Post Survey", "Survey List"];
	const [activeItem, setActiveItem] = React.useState(navItems[0]);
	const [isSurveyDetailOpen, setIsSurveyDetailOpen] = React.useState(false);
	const [selectedSurvey, setSelectedSurvey] = React.useState<Survey | null>(null);
	return (
		<div className="max-w-[1440px] mx-auto overflow-hidden pr-20 bg-neutral-100 max-md:pr-5">
			<div className="flex w-full gap-5 max-md:flex-col">
				<Sidebar navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} setIsSurveyDetailOpen={setIsSurveyDetailOpen} />
				{activeItem === "Home" && !isSurveyDetailOpen && <DashboardContent />}
				{activeItem === "User" && !isSurveyDetailOpen && <UserTable />}
				{activeItem === "Exchanges" && !isSurveyDetailOpen && <ExchangesTable />}
				{activeItem === "Post Survey" && !isSurveyDetailOpen && <SurveyForm />}
				{activeItem === "Survey List" && !isSurveyDetailOpen && <SurveyTable setIsSurveyDetailOpen={setIsSurveyDetailOpen} />}
				{isSurveyDetailOpen && (
					<SurveyDetail />
				)}
			</div>
		</div>
	);
}

export default AdminPage;
