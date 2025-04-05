import { useEffect } from "react";

import * as faceApi from "face-api.js";
import { useRef } from "react";

export type FaceDescriptor = faceApi.WithFaceDescriptor<
	faceApi.WithFaceLandmarks<
		{
			detection: faceApi.FaceDetection;
		},
		faceApi.FaceLandmarks68
	>
>;

export const useFaceApi = () => {
	const isFirstRender = useRef(true);

	const detectFace = async (imageRef: HTMLCanvasElement) => {
		const image = imageRef;
		if (!image) return;

		const detection = await faceApi
			.detectSingleFace(image, new faceApi.TinyFaceDetectorOptions())
			.withFaceLandmarks()
			.withFaceDescriptor();

		return detection;
	};

	const calculateDistance = (
		faceDescriptor1: number[],
		faceDescriptor2: number[],
	) => {
		const distance = faceApi.euclideanDistance(
			faceDescriptor1,
			faceDescriptor2,
		);
		return distance;
	};

	useEffect(() => {
		(async () => {
			await faceApi.nets.ssdMobilenetv1
				.loadFromUri("/models")
				.then(() => {
					console.log("ssdMobilenetv1 loaded");
				})
				.catch((error) => {
					console.error("Error loading ssdMobilenetv1:", error);
				});
			await faceApi.nets.tinyFaceDetector
				.loadFromUri("/models")
				.then(() => {
					console.log("tinyFaceDetector loaded");
				})
				.catch((error) => {
					console.error("Error loading tinyFaceDetector:", error);
				});
			await faceApi.nets.faceLandmark68Net
				.loadFromUri("/models")
				.then(() => {
					console.log("faceLandmark68Net loaded");
				})
				.catch((error) => {
					console.error("Error loading faceLandmark68Net:", error);
				});
			await faceApi.nets.faceRecognitionNet
				.loadFromUri("/models")
				.then(() => {
					console.log("faceRecognitionNet loaded");
				})
				.catch((error) => {
					console.error("Error loading faceRecognitionNet:", error);
				});
		})();
	}, []);

	return { detectFace, calculateDistance };
};
