import { useState, useEffect, useCallback } from 'react';
import { getCurrentWeather, getForecast, getAlerts } from '../services/weatherApi';

export function useWeather(lat = 39.4699, lon = -0.3763) {
  const [currentData, setCurrentData] = useState(null);
  const [currentLoading, setCurrentLoading] = useState(true);
  const [currentError, setCurrentError] = useState(null);

  const [forecastData, setForecastData] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(true);
  const [forecastError, setForecastError] = useState(null);

  const [alertsData, setAlertsData] = useState(null);
  const [alertsLoading, setAlertsLoading] = useState(true);
  const [alertsError, setAlertsError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // Fetch current weather
      setCurrentLoading(true);
      const current = await getCurrentWeather(lat, lon);
      setCurrentData(current);
      setCurrentError(null);
    } catch (err) {
      setCurrentError(err.message);
    } finally {
      setCurrentLoading(false);
    }

    try {
      // Fetch forecast
      setForecastLoading(true);
      const forecast = await getForecast(lat, lon);
      setForecastData(forecast);
      setForecastError(null);
    } catch (err) {
      setForecastError(err.message);
    } finally {
      setForecastLoading(false);
    }

    try {
      // Fetch alerts
      setAlertsLoading(true);
      const alerts = await getAlerts(lat, lon);
      setAlertsData(alerts);
      setAlertsError(null);
    } catch (err) {
      setAlertsError(err.message);
    } finally {
      setAlertsLoading(false);
    }
  }, [lat, lon]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const isAnyLoading = currentLoading || forecastLoading || alertsLoading;

  return {
    current: { data: currentData, loading: currentLoading, error: currentError },
    forecast: { data: forecastData, loading: forecastLoading, error: forecastError },
    alerts: { data: alertsData, loading: alertsLoading, error: alertsError },
    refresh,
    isAnyLoading,
  };
}