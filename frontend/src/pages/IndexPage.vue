<template>
  <q-page class="row items-center justify-evenly">       
    <q-card outlined class="q-ma-md" style="width: 90%; max-width: 400px">
      <q-tabs v-model="tab" class="text-primary">
        <q-tab name="pessoa" label="Pessoa Física" />
        <q-tab name="empresa" label="Pessoa Jurídica" />
      </q-tabs>
      
      <q-separator />
    
      <q-tab-panels v-model="tab">
        <q-tab-panel name="empresa">
          <q-card-section class="q-gutter-y-sm">
            <div class="q-pb-sm text-bold">Informações Básicas</div>
            
            <q-input v-model="empresa.nome" outlined label="Nome" />
            <q-input v-model="empresa.cnpj" outlined label="CNPJ" mask="##.###.###/####-##" />
            <q-input v-model="empresa.website" outlined label="Website" />
            <q-input v-model="empresa.email" outlined label="E-Mail" />
                   
            <div class="q-py-sm text-bold">Endereço</div>
            
            <q-input v-model="empresa.cep" outlined label="CEP" mask="##.###-###" />
            <q-input v-model="empresa.endereco" outlined label="Endereço" />
            <q-input v-model="empresa.numero" outlined label="Número" />
            <q-input v-model="empresa.bairro" outlined label="Bairro" />
            <q-input v-model="empresa.cidade" outlined label="Cidade" />
            <q-input v-model="empresa.estado" outlined label="Estado" />
            
            <div class="q-py-sm text-bold">Materiais</div>
            <q-checkbox v-model="empresa.materiais" label="Computador" val="eletronico-1" />
            <q-checkbox v-model="empresa.materiais" label="Smartphone" val="eletronico-2" />
            <q-checkbox v-model="empresa.materiais" label="Tablet" val="eletronico-3" />
            <q-checkbox v-model="empresa.materiais" label="Pilhas Alcalinas" val="pilha-1" />
            <q-checkbox v-model="empresa.materiais" label="Pilhas de Lítio" val="pilha-2" />
            <q-checkbox v-model="empresa.materiais" label="Baterias de Íon" val="bateria-1" />
            <q-checkbox v-model="empresa.materiais" label="Baterias de Chumbo" val="bateria-2" />
            <q-checkbox v-model="empresa.materiais" label="Baterias de Níquel" val="bateria-3" />
            <q-checkbox v-model="empresa.materiais" label="Cartuchos de Tinta" val="cartucho-1" />
            <q-checkbox v-model="empresa.materiais" label="Cartuchos de Toner" val="cartucho-2" />
            <q-checkbox v-model="empresa.materiais" label="Outros" val="eletronico-4" />
          </q-card-section>
        </q-tab-panel>
        
        <q-tab-panel name="pessoa">
          <q-card-section class="q-gutter-y-sm">
            <div class="q-pb-sm text-bold">Informações Básicas</div>
            
            <q-input v-model="pessoa.nome" outlined label="Nome" />
            <q-input v-model="pessoa.cpf" outlined label="CPF" mask="###.###.###-##" />
            <q-input v-model="pessoa.dataNascimento" outlined label="Data de Nascimento" mask="##/##/#####" />
            <q-select v-model="pessoa.sexo" outlined label="Sexo" behavior="menu" :options="['Masculino', 'Feminino', 'Outro']" />
            <q-input v-model="pessoa.email" outlined label="E-mail" />
            <q-input v-model="pessoa.telefone" outlined label="Telefone" mask="(##) #####-####" />
            
            <div class="q-py-sm text-bold">Endereço</div>
              
            <q-input v-model="pessoa.cep" outlined label="CEP" mask="##.###-###" />
            <q-input v-model="pessoa.endereco" outlined label="Endereço" />
            <q-input v-model="pessoa.numero" outlined label="Número" />
            <q-input v-model="pessoa.bairro" outlined label="Bairro" />
            <q-input v-model="pessoa.cidade" outlined label="Cidade" />
            <q-input v-model="pessoa.estado" outlined label="Estado" />
            
            <div class="q-py-sm text-bold">Materiais</div>

            <q-checkbox v-model="pessoa.materiais" label="Computador" val="eletronico-1" />
            <q-checkbox v-model="pessoa.materiais" label="Smartphone" val="eletronico-2" />
            <q-checkbox v-model="pessoa.materiais" label="Tablet" val="eletronico-3" />
            <q-checkbox v-model="pessoa.materiais" label="Pilhas Alcalinas" val="pilha-1" />
            <q-checkbox v-model="pessoa.materiais" label="Pilhas de Lítio" val="pilha-2" />
            <q-checkbox v-model="pessoa.materiais" label="Baterias de Íon" val="bateria-1" />
            <q-checkbox v-model="pessoa.materiais" label="Baterias de Chumbo" val="bateria-2" />
            <q-checkbox v-model="pessoa.materiais" label="Baterias de Níquel" val="bateria-3" />
            <q-checkbox v-model="pessoa.materiais" label="Cartuchos de Tinta" val="cartucho-1" />
            <q-checkbox v-model="pessoa.materiais" label="Cartuchos de Toner" val="cartucho-2" />
            <q-checkbox v-model="pessoa.materiais" label="Outros" val="eletronico-4" />
          </q-card-section>
        </q-tab-panel>
      </q-tab-panels>
      
      <q-separator/>
      
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" />
        <q-btn flat label="Salvar" color="primary" @click="save"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',  
  setup () {
    const tab = ref('pessoa');
    
    const empresa = ref({
      nome: '',
      cnpj: '',
      website: '',
      email: '',
      cep: '',
      endereco: '',
      numero: '',
      estado: '',
      cidade: '',
      bairro: '',
      materiais: [],
    });
    
    const pessoa = ref({
      nome: '',
      cpf: '',
      dataNascimento: '',
      sexoBiologico: '',
      email: '',
      telefone: '',
      endereco: '',
      numero: '',
      estado: '',
      cidade: '',
      bairro: '',
      materiais: [],
    });
    
    return { tab, pessoa, empresa };
  },
  methods: {
    save() {
      console.log(empresa);
    }
  },
});
</script>
