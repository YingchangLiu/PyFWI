Search.setIndex({docnames:["PyFWI","getting_started","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["PyFWI.rst","getting_started.rst","index.rst"],objects:{"":[[0,0,0,"-","PyFWI"]],"PyFWI.acquisition":[[0,1,1,"","AcqParameters"],[0,2,1,"","Source"],[0,1,1,"","SurfaceSeismic"],[0,1,1,"","acquisition_plan"],[0,1,1,"","crosswell"],[0,1,1,"","discretized_acquisition_plan"],[0,1,1,"","prepare_residual"],[0,1,1,"","seismic_section"]],"PyFWI.acquisition.Source":[[0,3,1,"","Ricker"],[0,3,1,"","delta"]],"PyFWI.fwi":[[0,2,1,"","FWI"]],"PyFWI.fwi.FWI":[[0,3,1,"","fprime"],[0,3,1,"","fprime_single"],[0,3,1,"","lbfgs"],[0,3,1,"","run"]],"PyFWI.fwi_tools":[[0,2,1,"","CPML"],[0,2,1,"","CostFunction"],[0,1,1,"","adj_cost_preparation"],[0,1,1,"","adj_lowpass"],[0,1,1,"","cost_function"],[0,1,1,"","cost_preparation"],[0,1,1,"","cost_seismic"],[0,1,1,"","derivative"],[0,1,1,"","dict_diff"],[0,1,1,"","dict_summation"],[0,1,1,"","expand_model"],[0,2,1,"","fdm"],[0,1,1,"","grad_lmd_to_vd"],[0,1,1,"","grad_vd_to_lmd"],[0,1,1,"","inpa_generator"],[0,1,1,"","inpa_loading"],[0,1,1,"","lowpass"],[0,1,1,"","modeling_model"],[0,1,1,"","pcs_dict2vec"],[0,1,1,"","pml_counstruction"],[0,1,1,"","pml_delta_calculation"],[0,2,1,"","recorder"],[0,2,1,"","regularization"],[0,1,1,"","residual"],[0,1,1,"","source_weighting"],[0,1,1,"","svd_reconstruction"],[0,1,1,"","vec2pcs_dict"],[0,1,1,"","vec2vel_dict"],[0,1,1,"","vel_dict2vec"]],"PyFWI.fwi_tools.CPML":[[0,3,1,"","pml_prepare"],[0,3,1,"","psi_reset"]],"PyFWI.fwi_tools.CostFunction":[[0,3,1,"","exponential_cost"],[0,3,1,"","l1"],[0,3,1,"","l2"],[0,3,1,"","l2_envelope"],[0,3,1,"","l2_hilbert"],[0,3,1,"","l2_intensity"],[0,3,1,"","list2dict"],[0,3,1,"","plot_amp_spectrum"],[0,3,1,"","plot_trace"]],"PyFWI.fwi_tools.fdm":[[0,4,1,"","c1"],[0,4,1,"","c2"],[0,4,1,"","c3"],[0,4,1,"","c4"],[0,3,1,"","dot_product_test_derivatives"],[0,3,1,"","dt_computation"],[0,3,1,"","dxm"],[0,3,1,"","dxp"],[0,3,1,"","dzm"],[0,3,1,"","dzp"],[0,4,1,"","order"]],"PyFWI.fwi_tools.recorder":[[0,3,1,"","acquire"]],"PyFWI.fwi_tools.regularization":[[0,3,1,"","cost_regularization"],[0,3,1,"","l1"],[0,3,1,"","l2"],[0,3,1,"","tikhonov"],[0,3,1,"","tikhonov_0"],[0,3,1,"","tv"]],"PyFWI.model_dataset":[[0,2,1,"","Circular"],[0,2,1,"","Laminar"],[0,2,1,"","ModelGenerator"],[0,1,1,"","add_anomaly"],[0,1,1,"","add_circle"],[0,1,1,"","add_layer"],[0,1,1,"","background"],[0,1,1,"","model_resizing"],[0,1,1,"","model_smoother"],[0,1,1,"","pcs_perturbation"]],"PyFWI.model_dataset.Circular":[[0,3,1,"","Hu_circles"],[0,3,1,"","louboutin"],[0,3,1,"","perturbation_dv"],[0,3,1,"","yang"]],"PyFWI.model_dataset.Laminar":[[0,3,1,"","Hu_laminar"],[0,3,1,"","dupuy"]],"PyFWI.model_dataset.ModelGenerator":[[0,3,1,"","marmousi"],[0,3,1,"","show"]],"PyFWI.optimization":[[0,2,1,"","FWI"],[0,1,1,"","linesearch"],[0,1,1,"","truncated"]],"PyFWI.optimization.FWI":[[0,3,1,"","fprime"],[0,3,1,"","fprime_single"],[0,3,1,"","gauss_newton"],[0,3,1,"","parameter_optimization"],[0,3,1,"","run"],[0,3,1,"","steepest_descent"]],"PyFWI.processing":[[0,2,1,"","Gain"],[0,2,1,"","Gain_function"]],"PyFWI.processing.Gain":[[0,4,1,"","test"],[0,3,1,"","time_linear"]],"PyFWI.processing.Gain_function":[[0,3,1,"","apply"]],"PyFWI.rock_physics":[[0,2,1,"","Density"],[0,1,1,"","Han"],[0,2,1,"","Lamb"],[0,2,1,"","Mu"],[0,2,1,"","ShearVelocity"],[0,1,1,"","biot_gassmann"],[0,1,1,"","delta_biot_gassmann"],[0,1,1,"","drained_moduli"],[0,1,1,"","error_lack_of_data"],[0,1,1,"","lmd2vd"],[0,2,1,"","p_velocity"],[0,1,1,"","reverse_Han"],[0,1,1,"","vd2lmd"],[0,1,1,"","voigt_berie"]],"PyFWI.rock_physics.Density":[[0,3,1,"","effective_density"],[0,3,1,"","fluid"],[0,3,1,"","gardner"],[0,3,1,"","matrix"],[0,3,1,"","rho_from_pcs"]],"PyFWI.rock_physics.Lamb":[[0,3,1,"","vp_rho_mu"]],"PyFWI.rock_physics.Mu":[[0,3,1,"","vs_rho"]],"PyFWI.rock_physics.ShearVelocity":[[0,3,1,"","Han"],[0,3,1,"","poisson_ratio_vs"]],"PyFWI.rock_physics.p_velocity":[[0,3,1,"","Han"],[0,3,1,"","gardner"],[0,3,1,"","lam_mu_rho"]],"PyFWI.seiplot":[[0,1,1,"","earth_model"],[0,1,1,"","gn_plot"],[0,1,1,"","inversion_video"],[0,1,1,"","seismic_section"]],"PyFWI.seismic_io":[[0,1,1,"","load_mat"],[0,1,1,"","load_pkl"],[0,1,1,"","read_segy"],[0,1,1,"","save_mat"],[0,1,1,"","save_pkl"]],"PyFWI.wave_propagation":[[0,2,1,"","wave_preparation"],[0,2,1,"","wave_propagator"]],"PyFWI.wave_propagation.wave_preparation":[[0,3,1,"","adjoint_buffer_preparing"],[0,3,1,"","elastic_buffers"],[0,3,1,"","gradient_reading"],[0,3,1,"","initial_wavefield_plot"],[0,3,1,"","kernel_caller"],[0,3,1,"","make_residual"],[0,3,1,"","make_seismogram"],[0,3,1,"","plot_propagation"],[0,3,1,"","pml_preparation"]],"PyFWI.wave_propagation.wave_propagator":[[0,3,1,"","forward_modeling"],[0,3,1,"","forward_propagator"],[0,3,1,"","gradient"]],PyFWI:[[0,0,0,"-","acquisition"],[0,0,0,"-","fwi"],[0,0,0,"-","fwi_tools"],[0,0,0,"-","model_dataset"],[0,0,0,"-","optimization"],[0,0,0,"-","processing"],[0,0,0,"-","rock_physics"],[0,0,0,"-","seiplot"],[0,0,0,"-","seismic_io"],[0,0,0,"-","wave_propagation"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:property"},terms:{"0":0,"001":0,"0199":0,"07":0,"08":0,"1":0,"10":0,"100":0,"1190":0,"154879":0,"1988":0,"1995":0,"1d":0,"1e":0,"1st":0,"2":0,"2013":0,"2014":0,"2017":0,"2018":0,"2020":0,"2021":0,"25":0,"2dx":0,"2nd":0,"2u_":0,"2u_i":0,"3":0,"4":0,"48":0,"4d":0,"5":0,"50":0,"572":0,"590":0,"6":0,"62":0,"68":0,"7":0,"728":0,"76":0,"77":0,"8":0,"83185307179586":0,"86":0,"9":0,"93":0,"94":0,"arti\ufb01ci":0,"boolean":0,"case":0,"class":0,"coef\ufb01cient":0,"default":0,"float":0,"function":0,"import":0,"int":0,"new":0,"re\ufb02ect":0,"return":0,"static":0,"switch":0,"true":0,A:0,For:0,If:0,In:0,It:0,That:0,The:0,_cells_:0,a1:0,a2:0,a3:0,abov:0,absorb:0,aciv:0,acoust:0,acq_typ:0,acqparamet:0,acquir:0,acquisit:2,acquisition_plan:0,ad:0,add:0,add_anomali:0,add_circl:0,add_lay:0,adj_cost_prepar:0,adj_grad_lmd_to_vd:[],adj_lowpass:0,adj_src:0,adjoint:0,adjoint_buffer_prepar:0,after:0,al:0,all:0,alongsid:0,alpha0:0,alpha:0,alpha_x:0,alpha_z:0,alreadi:0,alyer:0,amethod:0,ampl:0,amplifi:0,amplitud:0,an:0,anom:0,anomali:0,anoth:0,appli:0,applic:0,ar:0,araujo:0,arg:0,argument:0,around:0,arrai:0,ask:0,aspect_preserv:0,assumpt:0,averag:0,ax:0,axi:0,az:0,b1:0,b2:0,b3:0,background:0,backward:0,bai:0,base:0,befor:0,begining_compon:0,better:0,between:0,biot_gassmann:0,bond:0,bool:0,both:0,bottom:0,boundari:0,bp:0,br:[],buffer:0,bunk:0,bx:0,bz:0,c1:0,c2:0,c3:0,c4:0,ca:0,calcul:0,calul:0,cambridg:0,can:[0,1],case_a:0,case_a_label:0,case_b:0,case_b_label:0,cc:0,ccontain:0,center:0,central:0,cf:0,charg:0,chen:0,choos:0,chpr:0,circl:0,circle_prop:0,circular:0,clai:0,clasi:0,clim:0,coeefici:0,coeffici:0,collegu:0,column:0,com:0,common:0,compar:0,comparison:0,compon:0,comput:0,condit:0,consid:0,consist:0,constant:0,constant_left:0,constant_surfac:0,construct:0,conta:0,contain:0,convert:0,cost:0,cost_funct:0,cost_function_typ:0,cost_prepar:0,cost_regular:0,cost_seism:0,costfunct:0,could:0,cpml:0,creat:0,createad:0,crosswel:0,cs:0,current:0,cx:0,cz:0,d:0,d_est:0,d_ob:0,d_obs0:0,d_pre0:0,d_pre:0,data:0,data_guid:0,datafor:0,date:0,deffrinti:0,defin:0,delta:0,delta_biot_gassmann:0,demand:0,densiti:0,depth:0,deriv:0,descript:0,design:0,desir:0,dest0:0,dest:0,develop:0,devid:0,dh:0,dic:0,dict1:0,dict2:0,dict:0,dict_diff:0,dict_summ:0,dictionari:0,dictionnari:0,differ:0,differenti:0,dip:0,direct:0,discret:0,discretized_acquisition_plan:0,dispers:0,distanc:0,divis:0,dob:0,dobs0:0,doi:0,domin:0,dot_product_test_deriv:0,dpre:0,drained_moduli:0,dt:0,dt_comput:0,dupui:0,dure:0,dv:0,dvorkin:0,dx:0,dx_pml:0,dxm:0,dxp:0,dz:0,dz_pml:0,dzm:0,dzp:0,e:0,each:0,earth:0,earth_model:0,effect:0,effective_dens:0,elast:[0,2],elastic:0,elastic_buff:0,empir:0,envelop:0,ep:0,equat:0,equt:0,error:0,error_lack_of_data:0,estim:0,et:0,everywher:0,ex:0,excpet:0,expand_model:0,expans:0,explor:0,exponential_cost:0,extended_summari:0,ez:0,f_max:0,fals:0,fdm:0,fdom:0,fig:0,figur:0,file:0,file_path:0,filter:0,finit:0,first:0,flaot32:0,flloat32:0,float32:0,fluid:0,fn:0,fo:0,fo_wav:0,folder:0,format:0,forward:0,forward_model:0,forward_propag:0,found:0,four:[],fprime:0,fprime_singl:0,freq:0,frequenc:0,from:0,full:[0,2],fun:0,furthur:0,fval_old:0,fwi:2,fwi_tool:2,g:0,g_:0,ga:0,gain:0,gain_funct:0,gained_data:0,gao:0,gardner:0,gauss_newton:0,gcc0:[],geiophys:0,geneart:0,gener:0,geo2020:0,geophys:0,get:2,gf:0,given:0,gk:0,glam:0,gmu:0,gn_plot:0,go:0,gphi0:[],grad0:0,grad:0,grad_lmd_to_vd:0,grad_lmr_to_vd:0,grad_pcs2vd:[],grad_vd2pc:[],grad_vd_to_lmd:0,gradient:0,gradient_read:0,grho0:[],grho:0,grid:0,gsw0:[],gv:0,gvp0:[],gvp:0,gvs0:[],h:0,ha:0,han:0,handbook:0,happen:[],hast:0,hasym:0,have:0,height:0,hi:0,highcut:0,how:[],http:0,hu:0,hu_circl:0,hu_laminar:0,hydrocarbon:0,i:0,im:0,imag:0,imperi:0,implement:0,includ:0,index:2,inf:0,initi:0,initial_wavefield_plot:0,inject:0,innanen:0,inpa:0,inpa_gener:0,inpa_load:0,input:0,insid:0,instal:2,interest:0,invers:[0,2],inversion_video:0,invert:0,iter:0,its:0,ivers:0,j:0,k0:0,k:0,k_0:0,k_:0,k_d:0,k_end:0,k_f:0,k_g:0,k_l:0,karg:0,keat:0,kei:0,kernel_cal:0,kernel_sourc:0,km:0,kwarg:0,l1:0,l2:0,l2_envelop:0,l2_hilbert:0,l2_intens:0,laboratori:0,lad:0,lam:0,lam_mu_rho:0,lama:0,lamb:0,lambda:0,lame:0,laminar:0,laps:0,last:0,lavendar:0,layer:0,lb:0,lbfg:0,least:0,left:0,lenght:0,length:0,let:0,like:0,linear:0,linesearch:0,list2dict:0,list:0,lmd2vd:0,load:0,load_mat:0,load_pkl:0,loc:0,locat:0,log:[],look:0,louboutin:0,lowpass:0,lt:0,lume:0,m0:0,m1:0,m:[0,1],m_1:0,m_est:0,m_opt:0,m_video:0,macro:0,made:0,main:0,make:0,make_residu:0,make_seismogram:0,marmousi:0,mat:0,match:0,mathod:0,matric:0,matrix:0,mavko:0,mdethod:0,mdoel:0,measur:0,med_typ:0,media:2,messag:[],method:0,metric:0,min:0,mode:0,model0:0,model:0,model_dataset:2,model_res:0,model_s:0,model_smooth:0,modelgener:0,modeling_model:0,modello:0,modul:2,modulu:0,monitor:0,most:0,mr117:0,mr132:0,msg:[],mu:0,much:[],mukerji:0,multi:0,n:0,n_param:0,n_pml:0,n_well_rec:0,n_x:0,n_z:0,nalpha:0,name:0,nd:0,ndarrai:0,need:0,neg:0,network:0,neural:0,newton:0,nnu:0,non:0,none:0,npml:0,nr:0,ns:0,nt:0,nu0:0,nu:0,num_compon:0,number:0,nx:0,nyquist:0,nz:0,object:0,observ:0,obtain:0,offset:0,offsetx:0,offsetz:0,one:0,onli:0,opencl:0,oper:0,optim:2,option:0,order:0,origin:0,os:1,out:0,output:0,p:0,p_veloc:0,packag:2,page:2,paper:0,param:0,param_funct:0,paramet:0,parameter:0,parameter_optim:0,params_oh:0,part:0,path:0,paus:0,pc:0,pcs_dict2vec:0,pcs_perturb:0,percentag:[],perfectli:0,perform:0,perturb:0,perturbation_dv:0,pestana:0,phi:0,physic:0,pip:1,pk:0,pkl:0,place:0,plan:0,plot:0,plot_amp_spectrum:0,plot_propag:0,plot_trac:0,plot_typ:0,plu:0,pml:0,pml_counstruct:0,pml_delta_calcul:0,pml_prepar:0,pml_r:0,poisson:0,poisson_ratio_v:0,poros:0,posit:0,predict:0,prepar:0,prepare_residu:0,preserv:0,press:0,previous:0,problem:0,procedur:0,process:2,program:0,prop_back:0,prop_circl:0,propag:0,properti:0,prospect:0,provid:0,psi_reset:0,publish:0,put:0,py:1,pyfwi:1,python:[0,2],q:0,qi:0,qu:0,quartz:0,question:0,r:0,r_hydro:0,radiu:0,rapid:0,rate:0,ration:0,rb:0,rc:0,re:0,read:0,read_segi:0,rec:0,rec_di:0,rec_loc:0,receiv:0,record:0,ref:0,refer:0,refrenc:0,regress:0,regular:0,relat:0,requir:0,residu:0,result:0,reverse_han:0,rho:0,rho_:0,rho_c:0,rho_clai:0,rho_f:0,rho_from_pc:0,rho_g:0,rho_l:0,rho_m:0,rho_q:0,rho_w:0,ricker:0,right:0,rm:0,rock:0,rock_phys:2,room:0,row:0,rt:0,run:0,s:0,s_g:0,same:0,sampl:0,samplikng:0,sapl:0,satur:0,save:0,save_mat:0,save_pkl:0,scale:0,sdo:0,search:2,second:0,section:0,segi:0,seiplot:2,seismic:0,seismic_io:2,seismic_sect:0,seismo:0,seismogram:0,server:[],set:0,shape:0,shear:0,shearveloc:0,should:[],show:0,show_gain:0,shpw:0,sigma:0,signal:0,size:0,small:0,smooth:0,smoothing_valu:0,smooting_valu:[],solv:0,sourc:0,sourc_weight:0,source_weight:0,spatial:0,specifi:0,spectrum:0,spike:0,src:0,src_loc:0,ssr:0,stackexchang:0,start:2,stat:0,steepest_desc:0,step:0,stick:0,store:0,str:0,strategi:0,string:0,structur:0,submodul:[],subtract:0,summari:0,summat:0,surfac:0,surfaceseism:0,survei:0,svd_reconstruct:0,sw:0,system:0,t:0,t_axi:0,tempor:0,test:0,than:0,theoret:0,thi:0,through:0,tikhonov0_properti:0,tikhonov:0,tikhonov_0:0,tikhonov_properti:0,time:0,time_linear:0,tnx:0,tnz:0,todo:0,tool:0,top:0,trace:0,truncat:0,tupl:[],tv:0,tv_properti:0,two:0,type:0,u_:0,u_i:0,ultrason:0,uniqu:0,unit:0,univers:0,updat:0,us:[0,1],user:0,v:0,v_max:0,valu:0,variabl:0,vd2lmd:0,vec2pcs_dict:0,vec2vel_dict:0,vector:0,vel_dict2vec:0,veloc:0,vintag:0,visul:0,voigt_beri:0,vp:0,vp_max:0,vp_rho_mu:0,vs:0,vs_rho:0,w:0,want:0,warn:0,water:0,wave1:0,wave2:0,wave:0,wave_prepar:0,wave_propag:2,wavefield:[],waveform:[0,2],wavelet:0,we:0,well:0,when:0,which:0,whole:0,width:0,window:1,witch:0,wu:0,x0:0,x1:0,x:0,x_axi:0,x_locat:0,xk:0,yang:0,you:0,z:0,zero:0,zhou:0},titles:["PyFWI package","Getting started","Welcome to PyFWI\u2019s documentation!"],titleterms:{acquisit:0,content:[0,2],document:2,fwi:0,fwi_tool:0,get:1,indic:2,instal:1,model_dataset:0,modul:0,optim:0,packag:0,process:0,pyfwi:[0,2],rock_phys:0,s:2,seiplot:0,seismic_io:0,start:1,submodul:[],tabl:2,wave_propag:0,welcom:2}})