import { Route, Switch } from "wouter";
import NotFound from "@/pages/not-found";
import TrustPage from "@/pages/trust-page";
import CookieConsent from "@/components/CookieConsent";
import { routableTrustPages } from "@/lib/trust-pages";

export function AppRoutes() {
  return (
    <>
      <Switch>
        {routableTrustPages.map((page) => (
          <Route key={page.path} path={page.path}>
            <TrustPage page={page} />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
      <CookieConsent />
    </>
  );
}
