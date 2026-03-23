'use client'

import { useState } from 'react'

export function ROICalculator() {
  const [hours, setHours] = useState(15)
  const [rate, setRate] = useState(20)
  const [employees, setEmployees] = useState(3)

  const annualLoss = hours * rate * employees * 4 * 12

  function coutAnnuelEmployeur(tauxHoraire: number, heuresParSemaine = 35, semainesParAn = 47) {
    const cout = tauxHoraire * heuresParSemaine * semainesParAn
    return Math.round(cout / 100) * 100
  }

  const salaireBrutAnnuel = coutAnnuelEmployeur(rate)

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Combien vous coûtent réellement les{' '}
            <span className="text-primary underline decoration-primary/20 underline-offset-8">
              tâches manuelles ?
            </span>
          </h2>
          <p className="text-on-surface-variant">
            L&apos;automatisation n&apos;est pas un coût, c&apos;est l&apos;investissement le plus rentable de votre
            année.
          </p>
        </div>
        <div className="bg-surface-container p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase font-label text-secondary">
                  Heures perdues / semaine
                </label>
                <span className="text-primary font-bold">{hours}h</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full accent-primary h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase font-label text-secondary">
                  Coût horaire moyen{' '}
                  <span className="normal-case font-normal text-on-surface-variant">
                    ({salaireBrutAnnuel.toLocaleString()} € brut / an)
                  </span>
                </label>
                <span className="text-primary font-bold">{rate}€</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={rate}
                onChange={(e) => setRate(parseInt(e.target.value))}
                className="w-full accent-primary h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase font-label text-secondary">
                  Nombre de collaborateurs
                </label>
                <span className="text-primary font-bold">{employees}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full accent-primary h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl editorial-shadow border border-primary/10 flex flex-col justify-center text-center">
            <p className="text-on-surface-variant font-label text-xs uppercase mb-2">
              Perte de productivité annuelle
            </p>
            <p className="text-5xl font-black text-on-background mb-8">
              {annualLoss.toLocaleString()}€
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-fixed p-4 rounded-lg">
                <p className="font-bold text-lg text-green-600">450%</p>
                <p className="text-[10px] uppercase font-label font-bold">ROI estimé</p>
              </div>
              <div className="bg-tertiary-fixed p-4 rounded-lg">
                <p className="font-bold text-lg text-green-600">3 mois</p>
                <p className="text-[10px] uppercase font-label font-bold">Retour investi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
