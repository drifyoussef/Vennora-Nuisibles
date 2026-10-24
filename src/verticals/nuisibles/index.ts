import type { TradeDefinition } from "../types";

/**
 * Nuisibles — dératisation, désinsectisation, désinfection.
 *
 * Particularité du métier : l'équipement suivi n'appartient pas au client, il
 * est posé par l'entreprise — postes d'appâtage, pièges lumineux, stations de
 * monitoring — et repéré sur un plan. En restauration et en agroalimentaire,
 * le contrat de lutte intégrée impose des visites de contrôle régulières
 * (trimestrielles en usage courant), tracées pour l'audit sanitaire.
 */
export const nuisibles: TradeDefinition = {
  slug: "nuisibles",
  name: "Nuisibles",
  colorHex: "#4F7B45",
  active: true,

  vocabulary: {
    equipment: { singular: "Dispositif", plural: "Dispositifs" },
    intervention: { singular: "Intervention", plural: "Interventions" },
  },

  equipmentTypes: [
    {
      code: "POSTE_APPATAGE",
      label: "Poste d'appâtage",
      icon: "Box",
      defaultIntervalMonths: 3,
      sortOrder: 10,
    },
    {
      code: "PIEGE_MECANIQUE",
      label: "Piège mécanique",
      icon: "Wrench",
      defaultIntervalMonths: 3,
      sortOrder: 20,
    },
    {
      code: "PIEGE_LUMINEUX",
      label: "Désinsectiseur lumineux",
      icon: "Lightbulb",
      defaultIntervalMonths: 3,
      sortOrder: 30,
    },
    {
      code: "PIEGE_PHEROMONES",
      label: "Piège à phéromones",
      icon: "Bug",
      defaultIntervalMonths: 3,
      sortOrder: 40,
    },
    {
      code: "STATION_CONNECTEE",
      label: "Station connectée",
      icon: "Radio",
      defaultIntervalMonths: 6,
      sortOrder: 50,
    },
    {
      code: "ZONE_SENSIBLE",
      label: "Zone sensible",
      icon: "MapPin",
      defaultIntervalMonths: 3,
      sortOrder: 60,
    },
    {
      code: "AUTRE",
      label: "Autre",
      icon: "CircleDashed",
      defaultIntervalMonths: undefined,
      sortOrder: 999,
    },
  ],

  interventionTypes: [
    {
      code: "VISITE_CONTROLE",
      label: "Visite de contrôle",
      colorHex: "#2E4A32",
      defaultDurationMin: 60,
      recurrenceMonths: 3,
      sortOrder: 10,
    },
    {
      code: "DERATISATION",
      label: "Dératisation",
      colorHex: "#6E9A2E",
      defaultDurationMin: 90,
      recurrenceMonths: undefined,
      sortOrder: 20,
    },
    {
      code: "DESINSECTISATION",
      label: "Désinsectisation",
      colorHex: "#C9A227",
      defaultDurationMin: 90,
      recurrenceMonths: undefined,
      sortOrder: 30,
    },
    {
      code: "DESINFECTION",
      label: "Désinfection",
      colorHex: "#1E7FB8",
      defaultDurationMin: 120,
      recurrenceMonths: undefined,
      sortOrder: 40,
    },
    {
      code: "TRAITEMENT_PREVENTIF",
      label: "Traitement préventif",
      colorHex: "#4F7B45",
      defaultDurationMin: 60,
      recurrenceMonths: 6,
      sortOrder: 50,
    },
    {
      code: "AUDIT_SANITAIRE",
      label: "Audit sanitaire",
      colorHex: "#E2610F",
      defaultDurationMin: 120,
      recurrenceMonths: 12,
      sortOrder: 60,
    },
    {
      code: "URGENCE",
      label: "Intervention d'urgence",
      colorHex: "#C8102E",
      defaultDurationMin: 90,
      recurrenceMonths: undefined,
      sortOrder: 70,
    },
    {
      code: "AUTRE",
      label: "Autre",
      colorHex: "#6B7780",
      defaultDurationMin: 60,
      recurrenceMonths: undefined,
      sortOrder: 999,
    },
  ],

  reportSections: [
    {
      key: "summary",
      label: "Résumé de l'intervention",
      hint: "Deux à trois phrases factuelles : ce qui a été fait, sur quel site et quels dispositifs, avec quel résultat global.",
      required: true,
    },
    {
      key: "workDone",
      label: "Travaux réalisés",
      hint: "Liste des opérations effectivement réalisées (contrôle et réapprovisionnement des postes, relevé des consommations, remplacement des plaques et tubes, application du produit). Indiquer le produit utilisé, sa substance active, son numéro d'AMM et la dose appliquée. Ne rien inventer qui ne figure pas dans les notes.",
      required: true,
    },
    {
      key: "equipmentState",
      label: "Constat sur site",
      hint: "État constaté : niveau d'infestation par zone, indices de présence, dispositifs manquants ou dégradés, points d'entrée et facteurs favorisants (propreté, stockage, étanchéité du bâti).",
      required: true,
    },
    {
      key: "anomaliesSummary",
      label: "Anomalies constatées",
      hint: "Reprendre les anomalies enregistrées, avec leur gravité. Signaler explicitement tout risque de contamination de denrées. S'il n'y en a aucune, l'indiquer.",
      required: false,
    },
    {
      key: "recommendations",
      label: "Recommandations",
      hint: "Mesures correctives à la charge du client (obturation des passages, gestion des déchets, rangement), en lutte intégrée : agir sur les causes avant les produits. Sans engagement commercial.",
      required: false,
    },
    {
      key: "futureWork",
      label: "Travaux à prévoir",
      hint: "Interventions à planifier, avec un ordre de priorité. Aucun chiffrage.",
      required: false,
    },
  ],
};
