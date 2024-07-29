import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "../cards/Card.js";
import ROUTES from "../../app/routes.js";

import { selectQuizzes } from "./quizzesSlice.js";

export default function Quiz() {
	const quizzes = useSelector(selectQuizzes);
	const { quizId } = useParams();
	const quiz = quizzes[quizId];

	if (!quiz) {
		return <Navigate to={ROUTES.quizzesRoute()} replace />
	}


	return (
		<section>
			<h1>{quiz.name}</h1>
			<ul className="cards-list">
				{quiz.cardIds.map((id) => (
					<Card key={id} id={id} />
				))}
			</ul>
			<Link to={ROUTES.newQuizRoute()} className="button center">
				Create a New Quiz
			</Link>
		</section>
	);
}
